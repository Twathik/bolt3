import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PrescriptionOrderByWithRelationInput } from "../../../inputs/PrescriptionOrderByWithRelationInput";
import { PrescriptionWhereInput } from "../../../inputs/PrescriptionWhereInput";
import { PrescriptionWhereUniqueInput } from "../../../inputs/PrescriptionWhereUniqueInput";
import { PrescriptionScalarFieldEnum } from "../../../../enums/PrescriptionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstPrescriptionArgs {
  @TypeGraphQL.Field(_type => PrescriptionWhereInput, {
    nullable: true
  })
  where?: PrescriptionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PrescriptionOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PrescriptionOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PrescriptionWhereUniqueInput, {
    nullable: true
  })
  cursor?: PrescriptionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PrescriptionScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "clinicalEventId" | "savedPrescription" | "createdAt" | "updatedAt"> | undefined;
}
