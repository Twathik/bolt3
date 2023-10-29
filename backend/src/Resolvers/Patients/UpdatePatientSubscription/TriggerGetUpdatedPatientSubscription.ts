import * as TypeGraphQL from 'type-graphql'
import { GetUpdatedPatientArgs } from './Args/GetUpdatedPatientArgs'

export class TriggerGetUpdatedPatientSubscription {
  @TypeGraphQL.Mutation((_returns) => Boolean)
  async triggerGetUpdatedPatientSubscription(
    @TypeGraphQL.Args() { id }: GetUpdatedPatientArgs,
    @TypeGraphQL.PubSub('GET_UPDATED_PATIENT')
    publish: TypeGraphQL.Publisher<string>,
  ): Promise<Boolean> {
    await publish(id)
    return true
  }
}
