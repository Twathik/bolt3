import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { Context } from '../../context'
import { Patient } from '../../@generated'
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformInfoIntoPrismaArgs,
} from '../../@generated/helpers'
import { CreateOnePatientArgs } from './Args/CreateOnePatientArgs'

import { PrismaClient } from '@prisma/client'
import createTypesenseDocuments from '../../Utils/typesense/operations/createDocuments'

@TypeGraphQL.Resolver((_of) => Patient)
export class AddOnePatientToIndex {
  @TypeGraphQL.Mutation((_returns) => Patient, {
    nullable: false,
  })
  async AddOnePatientToIndex(
    @TypeGraphQL.Ctx() ctx: Context,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateOnePatientArgs,
  ): Promise<Patient> {
    const { _count } = transformInfoIntoPrismaArgs(info)

    const { data } = args

    try {
      const prisma = getPrismaFromContext(ctx) as PrismaClient
      const patient: Patient = await prisma.patient.create({
        ...{ data },
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      })

      try {
        await createTypesenseDocuments({
          index: 'patients',
          typesense: ctx.typesense,
          documents: [patient],
        })
        await prisma.clinicalEvent.create({
          data: {
            eventType: 'DIAGNOSTIC',
            user: { connect: { id: args.userId } },
            patient: { connect: { id: patient.id } },
          },
        })
        await prisma.clinicalEvent.create({
          data: {
            eventType: 'HISTORY',
            user: { connect: { id: args.userId } },
            patient: { connect: { id: patient.id } },
          },
        })

        return patient
      } catch (error) {
        console.log({ error })
        await prisma.patient.delete({
          where: { id: patient.id },
        })
        throw Error(error as any)
      }
    } catch (error) {
      console.log({ error })
      throw Error(error as any)
    }
  }
}
