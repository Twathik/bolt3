import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PrescriptionCreateManyInput } from "../../../inputs/PrescriptionCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPrescriptionArgs {
  @TypeGraphQL.Field(_type => [PrescriptionCreateManyInput], {
    nullable: false
  })
  data!: PrescriptionCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
