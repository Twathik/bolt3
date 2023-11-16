import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PrescriptionCreateInput } from "../../../inputs/PrescriptionCreateInput";
import { PrescriptionUpdateInput } from "../../../inputs/PrescriptionUpdateInput";
import { PrescriptionWhereUniqueInput } from "../../../inputs/PrescriptionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePrescriptionArgs {
  @TypeGraphQL.Field(_type => PrescriptionWhereUniqueInput, {
    nullable: false
  })
  where!: PrescriptionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PrescriptionCreateInput, {
    nullable: false
  })
  create!: PrescriptionCreateInput;

  @TypeGraphQL.Field(_type => PrescriptionUpdateInput, {
    nullable: false
  })
  update!: PrescriptionUpdateInput;
}
