import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DocumentTemplateOrderByWithRelationInput } from "../../../inputs/DocumentTemplateOrderByWithRelationInput";
import { DocumentTemplateWhereInput } from "../../../inputs/DocumentTemplateWhereInput";
import { DocumentTemplateWhereUniqueInput } from "../../../inputs/DocumentTemplateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateDocumentTemplateArgs {
  @TypeGraphQL.Field(_type => DocumentTemplateWhereInput, {
    nullable: true
  })
  where?: DocumentTemplateWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DocumentTemplateOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: DocumentTemplateOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => DocumentTemplateWhereUniqueInput, {
    nullable: true
  })
  cursor?: DocumentTemplateWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
