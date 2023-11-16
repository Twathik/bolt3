import * as TypeGraphQL from 'type-graphql'

@TypeGraphQL.ArgsType()
export class updateClinicalEventSubscriptionArgs {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  patientId!: string
}
