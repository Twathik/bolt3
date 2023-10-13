import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ConsultationListCreateManyInput } from "../../../inputs/ConsultationListCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyConsultationListArgs {
  @TypeGraphQL.Field(_type => [ConsultationListCreateManyInput], {
    nullable: false
  })
  data!: ConsultationListCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
