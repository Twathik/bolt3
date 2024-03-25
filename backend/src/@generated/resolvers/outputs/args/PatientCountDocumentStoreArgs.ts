import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DocumentStoreWhereInput } from "../../inputs/DocumentStoreWhereInput";

@TypeGraphQL.ArgsType()
export class PatientCountDocumentStoreArgs {
  @TypeGraphQL.Field(_type => DocumentStoreWhereInput, {
    nullable: true
  })
  where?: DocumentStoreWhereInput | undefined;
}
