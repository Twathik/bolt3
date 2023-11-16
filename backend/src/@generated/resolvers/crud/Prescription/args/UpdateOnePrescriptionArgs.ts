import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PrescriptionUpdateInput } from "../../../inputs/PrescriptionUpdateInput";
import { PrescriptionWhereUniqueInput } from "../../../inputs/PrescriptionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePrescriptionArgs {
  @TypeGraphQL.Field(_type => PrescriptionUpdateInput, {
    nullable: false
  })
  data!: PrescriptionUpdateInput;

  @TypeGraphQL.Field(_type => PrescriptionWhereUniqueInput, {
    nullable: false
  })
  where!: PrescriptionWhereUniqueInput;
}
