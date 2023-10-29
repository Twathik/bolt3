import * as TypeGraphQL from 'type-graphql'
import { CloseAllTabsMessage } from './Model/CloseAllTabsMessage'
import { getPrismaFromContext } from '../../@generated/helpers'
import { Context } from '../../context'
import { PrismaClient } from '@prisma/client'
import { Patient } from '../../@generated'

@TypeGraphQL.Resolver((_of) => CloseAllTabsMessage)
export class EmptyTrashSubscription {
  @TypeGraphQL.Subscription((_returns) => [Patient], {
    topics: 'EMPTY_TRASH',
  })
  async emptyTrashSubscription(
    @TypeGraphQL.Ctx() ctx: Context,
  ): Promise<Patient[]> {
    const prisma = getPrismaFromContext(ctx) as PrismaClient
    try {
      const onTrash = await prisma.patient.findMany({
        where: { onTrash: { equals: true }, deleted: { equals: false } },
      })

      return onTrash
    } catch (error) {
      throw Error('List of trash folders not available')
    }
  }
}
