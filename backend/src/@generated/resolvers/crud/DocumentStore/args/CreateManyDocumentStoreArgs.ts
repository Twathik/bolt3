import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DocumentStoreCreateManyInput } from "../../../inputs/DocumentStoreCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyDocumentStoreArgs {
  @TypeGraphQL.Field(_type => [DocumentStoreCreateManyInput], {
    nullable: false
  })
  data!: DocumentStoreCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
