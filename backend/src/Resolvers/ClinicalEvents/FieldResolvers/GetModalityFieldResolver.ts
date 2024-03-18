import * as TypeGraphQL from 'type-graphql'
import { ClinicalEvent, Modality } from '../../../@generated'
import {
  modalitiesTypeMapping,
  modalitiesTypesMapping,
} from '../../../Utils/DICOM/ModalitiesTypes'
import { Context } from '../../../context'

@TypeGraphQL.Resolver((_of) => ClinicalEvent)
export class GetModalitiesFieldResolver {
  @TypeGraphQL.FieldResolver((_returns) => [Modality], {
    nullable: false,
  })
  async getModalities(
    @TypeGraphQL.Root() clinicalEvent: ClinicalEvent,
    @TypeGraphQL.Ctx() ctx: Context,
  ): Promise<Modality[]> {
    const prisma = ctx.prisma
    const modalityType: modalitiesTypeMapping | undefined =
      modalitiesTypesMapping.find(
        (e) => e.eventType === clinicalEvent.eventType,
      )
    if (!modalityType) return []

    return prisma.modality.findMany({
      where: {
        modalityType: modalityType.type,
        activated: true,
        deleted: false,
        enabled: true,
      },
    })
  }
}
