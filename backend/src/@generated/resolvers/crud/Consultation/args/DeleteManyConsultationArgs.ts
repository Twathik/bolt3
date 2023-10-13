import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ConsultationWhereInput } from "../../../inputs/ConsultationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyConsultationArgs {
  @TypeGraphQL.Field(_type => ConsultationWhereInput, {
    nullable: true
  })
  where?: ConsultationWhereInput | undefined;
}
