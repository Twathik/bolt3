import * as TypeGraphQL from 'type-graphql'
import { Patient } from '../../@generated'
import { Context } from '../../context'
import { MovePatientFolderToTrash } from './Args/MovePatientFolderToTrash'
import createPatient_typesense from '../../Utils/typesense/Patients/createPatient'

@TypeGraphQL.Resolver((_of) => Patient)
export class MoveFolderToTrash {
  @TypeGraphQL.Mutation((_returns) => Patient, {
    nullable: true,
  })
  async movePatientFolderToTrash(
    @TypeGraphQL.Ctx() ctx: Context,
    @TypeGraphQL.Args() args: MovePatientFolderToTrash,
    @TypeGraphQL.PubSub('GET_UPDATED_PATIENT')
    publish: TypeGraphQL.Publisher<string>,
    @TypeGraphQL.PubSub('EMPTY_TRASH')
    notify: TypeGraphQL.Publisher<string>,
  ): Promise<Patient | null> {
    try {
      const patient = await ctx.prisma.patient.update({
        where: { id: args.id },
        data: { onTrash: args.onTrash },
      })

      if (args.onTrash) {
        await ctx.typesense
          .collections('patients')
          .documents(patient.id)
          .delete()
      } else {
        await createPatient_typesense({
          typesense: ctx.typesense,
          documents: [patient],
        })
      }
      publish(args.id)
      notify('empty')
      return patient
    } catch (error) {
      console.log({ error })
      throw new Error('failed to update patient data')
    }
  }
}
