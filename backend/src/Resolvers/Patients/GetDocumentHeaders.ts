import * as TypeGraphQL from 'type-graphql'
import { Patient } from '../../@generated'
import { Context } from '../../context'
import { GetDocumentHeadersArgs } from './Args/GetDocumentHeadersArgs'

@TypeGraphQL.Resolver((_of) => Patient)
export class GetDocumentHeaders {
  @TypeGraphQL.Query((_returns) => Boolean, {
    nullable: true,
  })
  async getDocumentHeaders(
    @TypeGraphQL.Ctx() ctx: Context,
    @TypeGraphQL.Args()
    { patientId, patientDocumentType }: GetDocumentHeadersArgs,
  ): Promise<Boolean | null> {
    try {
      const { prisma } = ctx

      const document = await prisma.documentStore.findFirst({
        where: {
          patientId,
          // @ts-ignore
          patientDocumentType: { equals: patientDocumentType },
        },
      })
      if (document?.content) {
        const content = new Uint8Array(document.content)
      }

      return null
    } catch (error) {
      console.log({ error })
      throw new Error('failed to update patient data')
    }
  }
}
