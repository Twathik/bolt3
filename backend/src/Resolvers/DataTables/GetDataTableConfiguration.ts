import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { Context } from '../../context'
import { DataTableSectionModel } from './model/DataTableModel'
import { DataTableConfigurations } from './configurations/DataTableConfigurations'
import { GetDataTableConfigurationArgs } from './args/GetDataTableConfigurationArgs'

@TypeGraphQL.Resolver((_of) => DataTableSectionModel)
export class GetDataTableConfiguration {
  @TypeGraphQL.Query((_returns) => [DataTableSectionModel], {
    nullable: true,
  })
  async getDataTableConfiguration(
    @TypeGraphQL.Ctx() _ctx: Context,
    @TypeGraphQL.Info() _info: GraphQLResolveInfo,
    @TypeGraphQL.Args() { eventType }: GetDataTableConfigurationArgs,
  ): Promise<DataTableSectionModel[]> {
    try {
      return DataTableConfigurations[eventType]
    } catch (error) {
      throw Error('not found patient')
    }
  }
}
