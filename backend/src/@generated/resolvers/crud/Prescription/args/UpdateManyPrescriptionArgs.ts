import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PrescriptionUpdateManyMutationInput } from "../../../inputs/PrescriptionUpdateManyMutationInput";
import { PrescriptionWhereInput } from "../../../inputs/PrescriptionWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPrescriptionArgs {
  @TypeGraphQL.Field(_type => PrescriptionUpdateManyMutationInput, {
    nullable: false
  })
  data!: PrescriptionUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PrescriptionWhereInput, {
    nullable: true
  })
  where?: PrescriptionWhereInput | undefined;
}
