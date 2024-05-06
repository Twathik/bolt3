import * as TypeGraphQL from 'type-graphql'
import { Patient } from '../../@generated'
import { Context } from '../../context'
import { MarkPatientFolderDeletedArgs } from './Args/MarkPatientFolderDeletedArgs'
import { WebsocketMessageInterface } from '../../Utils/PubSubInterfaces/WebsocketMessageInterface'
import {
  PatientInfoInterface,
  notificationTopic,
} from '../../Utils/PubSubInterfaces/MessageTypesInterface'
import { format } from 'date-fns'
import { v4 as uuid } from 'uuid'

@TypeGraphQL.Resolver((_of) => Patient)
export class MarkPatientFolderDeleted {
  @TypeGraphQL.Mutation((_returns) => Patient, {
    nullable: true,
  })
  async markPatientFolderDeleted(
    @TypeGraphQL.Ctx() ctx: Context,
    @TypeGraphQL.Args() { id }: MarkPatientFolderDeletedArgs,
  ): Promise<Patient | null> {
    try {
      const prisma = ctx.prisma
      const pubSub = ctx.pubSub
      const patient = await prisma.patient.update({
        where: { id },
        data: { deleted: true },
      })

      const notification: WebsocketMessageInterface = {
        id: uuid(),
        global: true,
        subscriptionIds: [],
        destination: [],
        type: 'patient',
        payload: {
          operation: 'delete',
          patient: {
            ...patient,
            ddn: format(patient.ddn, 'dd-MM-yyyy'),
            patientFullName: `${patient.lastName} ${patient.firstName}`,
            updated: patient.updated.toISOString(),
          } as PatientInfoInterface,
        },
      }
      pubSub.publish(notificationTopic, notification)

      return patient
    } catch (error) {
      console.log({ error })
      throw new Error('failed to update patient data')
    }
  }
}
