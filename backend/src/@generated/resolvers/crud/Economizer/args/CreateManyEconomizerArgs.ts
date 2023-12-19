import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EconomizerCreateManyInput } from "../../../inputs/EconomizerCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyEconomizerArgs {
  @TypeGraphQL.Field(_type => [EconomizerCreateManyInput], {
    nullable: false
  })
  data!: EconomizerCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
