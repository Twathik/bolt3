import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ConsultationWhereUniqueInput } from "../../../inputs/ConsultationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueConsultationOrThrowArgs {
  @TypeGraphQL.Field(_type => ConsultationWhereUniqueInput, {
    nullable: false
  })
  where!: ConsultationWhereUniqueInput;
}
