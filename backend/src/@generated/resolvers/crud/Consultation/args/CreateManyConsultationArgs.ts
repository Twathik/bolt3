import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ConsultationCreateManyInput } from "../../../inputs/ConsultationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyConsultationArgs {
  @TypeGraphQL.Field(_type => [ConsultationCreateManyInput], {
    nullable: false
  })
  data!: ConsultationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
