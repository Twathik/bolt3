import * as TypeGraphQL from 'type-graphql'
import { WorkingList } from '../../@generated'
import { getPrismaFromContext } from '../../@generated/helpers'
import { Context } from '../../context'
import { PrismaClient } from '@prisma/client'
import { execSync } from 'child_process'
import { rmSync } from 'fs'
import { GetWorkingListArgs } from './args/GetWorkingListArgs'
import { AppSubscriptionTriggerArgs } from '../Global/AppSubscription/args/AppSubscriptionTriggerArgs'

@TypeGraphQL.Resolver((_of) => WorkingList)
export class ToggleLockWorkingList {
  @TypeGraphQL.Mutation((_returns) => WorkingList, {
    nullable: false,
  })
  async toggleLockWorkingList(
    @TypeGraphQL.Ctx() ctx: Context,
    @TypeGraphQL.Args() { id, userId }: GetWorkingListArgs,
    @TypeGraphQL.PubSub('APP_SUBSCRIPTION')
    notify: TypeGraphQL.Publisher<AppSubscriptionTriggerArgs>,
  ): Promise<WorkingList> {
    const prisma = getPrismaFromContext(ctx) as PrismaClient
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

      const {
        clinicalEventId,
        createdAt,
        modalityExamStatus,
        linkId,
        linked,
        locked,
      } = updateWorkingList
      const {
        id: modalityId,
        modalityPseudo,
        modalityType,
        modalityAETitle,
      } = modality
      const { firstName, lastName } = patient
      const { fullName } = user
      await notify({
        type: 'workingLists',
        global: true,
        userId,
        appPayload: JSON.stringify({
          operation: 'update',
          workingList: {
            id,
            modality: {
              id: modalityId,
              modalityPseudo,
              modalityType,
              modalityAETitle,
            },
            patient: {
              patientFullName: `${lastName} ${firstName}`,
            },
            user: {
              fullName,
            },
            clinicalEventId,
            createdAt,
            modalityExamStatus,
            linkId,
            linked,
            locked,
          },
        }),
      })

      return workingList
    } catch (error) {
      console.log({ error })
      throw Error('The workingList entry has not been created')
    }
  }
}
