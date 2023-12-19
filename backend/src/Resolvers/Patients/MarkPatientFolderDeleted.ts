import * as TypeGraphQL from 'type-graphql'

import { Patient } from '../../@generated'
import { Context } from '../../context'
import { MarkPatientFolderDeletedArgs } from './Args/MarkPatientFolderDeletedArgs'

@TypeGraphQL.Resolver((_of) => Patient)
export class MarkPatientFolderDeleted {
  @TypeGraphQL.Mutation((_returns) => Patient, {
    nullable: true,
  })
  async markPatientFolderDeleted(
    @TypeGraphQL.Ctx() ctx: Context,
    @TypeGraphQL.Args() args: MarkPatientFolderDeletedArgs,
  ): Promise<Patient | null> {
    try {
      const prisma = ctx.prisma
      const patient = await prisma.patient.update({
        where: { id: args.id },
        data: { deleted: true },
      })
      return patient
    } catch (error) {
      console.log({ error })
      throw new Error('failed to update patient data')
    }
  }
}
