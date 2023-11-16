import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PrescriptionCreateInput } from "../../../inputs/PrescriptionCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePrescriptionArgs {
  @TypeGraphQL.Field(_type => PrescriptionCreateInput, {
    nullable: false
  })
  data!: PrescriptionCreateInput;
}
