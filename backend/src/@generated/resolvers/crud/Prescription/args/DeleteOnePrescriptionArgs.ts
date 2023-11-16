import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PrescriptionWhereUniqueInput } from "../../../inputs/PrescriptionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOnePrescriptionArgs {
  @TypeGraphQL.Field(_type => PrescriptionWhereUniqueInput, {
    nullable: false
  })
  where!: PrescriptionWhereUniqueInput;
}
