import * as TypeGraphQL from 'type-graphql'
import { ClinicalEvent } from '../../../@generated'
import { DataTableSectionModel } from '../../DataTables/model/DataTableModel'
import { DataTableConfigurations } from '../../DataTables/configurations/DataTableConfigurations'

@TypeGraphQL.Resolver((_of) => ClinicalEvent)
export class GetConfigurationFieldResolver {
  @TypeGraphQL.FieldResolver((_returns) => [DataTableSectionModel], {
    nullable: false,
  })
  async getConfigurationFile(
    @TypeGraphQL.Root() clinicalEvent: ClinicalEvent,
  ): Promise<DataTableSectionModel[]> {
    return DataTableConfigurations[clinicalEvent.eventType]
  }
}
