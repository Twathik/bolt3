import * as TypeGraphQL from 'type-graphql'
import { Patient } from '../../@generated'
import { Context } from '../../context'
import { MovePatientFolderToTrash } from './Args/MovePatientFolderToTrash'
import createTypesenseDocuments from '../../Utils/typesense/operations/createDocuments'
import RemoveTypesenseDocument from '../../Utils/typesense/operations/removeDocument'

@TypeGraphQL.Resolver((_of) => Patient)
export class MoveFolderToTrash {
  @TypeGraphQL.Mutation((_returns) => Patient, {
    nullable: true,
  })
  async movePatientFolderToTrash(
    @TypeGraphQL.Ctx() ctx: Context,
    @TypeGraphQL.Args() args: MovePatientFolderToTrash,
    @TypeGraphQL.PubSub('EMPTY_TRASH')
    notify: TypeGraphQL.Publisher<string>,
  ): Promise<Patient | null> {
    try {
      const patient = await ctx.prisma.patient.update({
        where: { id: args.id },
        data: { onTrash: args.onTrash },
      })

      if (args.onTrash) {
        await Promise.all([
          RemoveTypesenseDocument({
            index: 'patients',
            id: patient.id,
            typesense: ctx.typesense,
          }),
          notify('empty'),
        ])
      } else {
        Promise.all([
          createTypesenseDocuments({
            index: 'patients',
            typesense: ctx.typesense,
            documents: [patient],
          }),
          notify('empty'),
        ])
      }

      return patient
    } catch (error) {
      console.log({ error })
      throw new Error('failed to update patient data')
    }
  }
}
