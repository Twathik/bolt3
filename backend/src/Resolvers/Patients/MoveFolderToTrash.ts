import * as TypeGraphQL from 'type-graphql'
import { Patient } from '../../@generated'
import { Context } from '../../context'
import { MovePatientFolderToTrash } from './Args/MovePatientFolderToTrash'
import createTypesenseDocuments from '../../Utils/typesense/operations/createDocuments'
import RemoveTypesenseDocument from '../../Utils/typesense/operations/removeDocument'
import { getYear } from 'date-fns'
import { WebsocketMessageInterface } from '../../Utils/PubSubInterfaces/WebsocketMessageInterface'
import { notificationTopic } from '../../Utils/PubSubInterfaces/MessageTypesInterface'

@TypeGraphQL.Resolver((_of) => Patient)
export class MoveFolderToTrash {
  @TypeGraphQL.Mutation((_returns) => Patient, {
    nullable: true,
  })
  async movePatientFolderToTrash(
    @TypeGraphQL.Ctx() ctx: Context,
    @TypeGraphQL.Args() { userId, ...args }: MovePatientFolderToTrash,
  ): Promise<Patient | null> {
    try {
      const { prisma, pubSub } = ctx
      const patient = await prisma.patient.update({
        where: { id: args.id },
        data: { onTrash: args.onTrash },
      })

      const { ddn } = patient

      if (args.onTrash) {
        await RemoveTypesenseDocument({
          index: 'patients',
          id: patient.id,
          typesense: ctx.typesense,
        })
      } else {
        await createTypesenseDocuments({
          index: 'patients',
          typesense: ctx.typesense,
          documents: [
            {
              ...patient,
              ddn_year: getYear(ddn),
              search_ddn_year: getYear(ddn).toString(),
            },
          ],
        })
      }
      const updatePatientNotification: WebsocketMessageInterface = {
        global: true,
        destination: ['folder'],
        subscriptionIds: [patient.id],
        type: 'patient',
        payload: {
          operation: 'update',
          patient,
        },
      }
      pubSub.publish(notificationTopic, updatePatientNotification)

      const onTrashNotification: WebsocketMessageInterface = {
        global: true,
        destination: ['trash'],
        subscriptionIds: [],
        type: 'patient',
        payload: {
          operation: 'onTrash',
          patient,
          trashOperation: args.onTrash ? 'addToTrash' : 'restore',
        },
      }

      pubSub.publish(notificationTopic, onTrashNotification)

      return patient
    } catch (error) {
      console.dir({ error }, { depth: 5, colors: true })
      throw new Error('failed to update patient data')
    }
  }
}
