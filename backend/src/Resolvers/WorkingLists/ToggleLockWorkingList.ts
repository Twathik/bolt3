import * as TypeGraphQL from 'type-graphql'
import { WorkingList } from '../../@generated'
import { Context } from '../../context'
import { execSync } from 'child_process'
import { rmSync } from 'fs'
import { GetWorkingListArgs } from './args/GetWorkingListArgs'
import { v4 as uuid } from 'uuid'
import { WebsocketMessageInterface } from '../../Utils/PubSubInterfaces/WebsocketMessageInterface'
import { notificationTopic } from '../../Utils/PubSubInterfaces/MessageTypesInterface'

@TypeGraphQL.Resolver((_of) => WorkingList)
export class ToggleLockWorkingList {
  @TypeGraphQL.Mutation((_returns) => WorkingList, {
    nullable: false,
  })
  async toggleLockWorkingList(
    @TypeGraphQL.Ctx() { prisma, pubSub }: Context,
    @TypeGraphQL.Args() { id }: GetWorkingListArgs,
  ): Promise<WorkingList> {
    try {
      const workingList = await prisma.workingList.findUniqueOrThrow({
        where: { id },
      })

      const [updateWorkingList, patient, user, modality] = await Promise.all([
        prisma.workingList.update({
          where: { id },
          data: {
            locked: !workingList.locked,
          },
        }),
        prisma.patient.findFirstOrThrow({
          where: { id: workingList.patientId },
        }),
        prisma.user.findFirstOrThrow({ where: { id: workingList.userId } }),

        prisma.modality.findFirstOrThrow({
          where: { id: workingList.modalityId },
        }),
      ])

      if (!updateWorkingList.locked) {
        try {
          const cmd = `docker run --rm -v ./worklists:/var/local imbio/dcmtk dump2dcm /var/local/${workingList.id}.txt /var/local/${workingList.id}.wl`
          execSync(cmd).toString()
        } catch (e) {
          const error = e as any
          error.status // 0 : successful exit, but here in exception it has to be greater than 0
          error.message // Holds the message you typically want.
          error.stderr // Holds the stderr output. Use `.toString()`.
          error.stdout // Holds the stdout output. Use `.toString()`.
        }
        /* exec(
          `docker run --rm -v ./worklists:/var/local imbio/dcmtk dump2dcm /var/local/${workingList.id}.txt /var/local/${workingList.id}.wl`,
          (error, stdout, stderr) => {
            if (error) {
              console.log(`error: ${error.message}`)
              return
            }
            if (stderr) {
              console.log(`stderr: ${stderr}`)
              return
            }
            console.log(`stdout: ${stdout}`)
          },
        ) */
      } else {
        rmSync(`./worklists/${workingList.id}.wl`)
      }

      const message: WebsocketMessageInterface = {
        destination: ['folder'],
        global: true,
        id: uuid(),
        payload: {
          workingList: {
            ...updateWorkingList,
            modality,
            user: {
              fullName: `${user.lastName}^${user.firstName}`,
            },
            patient: {
              patientFullName: `${patient.lastName}^${patient.firstName}`,
            },
          },
          operation: 'update',
        },
        type: 'workingList',
        subscriptionIds: [patient.id],
      }
      await pubSub.publish(notificationTopic, message)

      return workingList
    } catch (error) {
      console.log({ error })
      throw Error('The workingList entry has not been created')
    }
  }
}
