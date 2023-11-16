import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PrescriptionWhereInput } from "../../../inputs/PrescriptionWhereInput";

@TypeGraphQL.ArgsType()
export class ClinicalEventPrescriptionArgs {
  @TypeGraphQL.Field(_type => PrescriptionWhereInput, {
    nullable: true
  })
  where?: PrescriptionWhereInput | undefined;
}
