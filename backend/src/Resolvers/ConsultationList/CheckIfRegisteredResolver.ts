import * as TypeGraphQL from 'type-graphql'
import {
  ConsultationList,
  DeleteOneConsultationListArgs,
} from '../../@generated'
import { Context } from '../../context'

@TypeGraphQL.Resolver((_of) => ConsultationList)
export class CheckIfRegisteredResolver {
  @TypeGraphQL.Query((_returns) => Boolean, {
    nullable: false,
  })
  async checkIfRegistered(
    @TypeGraphQL.Ctx() { prisma }: Context,
    @TypeGraphQL.Args() args: DeleteOneConsultationListArgs,
  ): Promise<Boolean | null> {
    try {
      const consultationList = await prisma.consultationList.findFirst({
        ...args,
        include: { patient: true },
      })

      return Boolean(consultationList)
    } catch (error) {
      console.log({ error })
      throw Error('consultationList check failed')
    }
  }
}
