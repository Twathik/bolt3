import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentStoreCreateManyPatientInput } from "../inputs/DocumentStoreCreateManyPatientInput";

@TypeGraphQL.InputType("DocumentStoreCreateManyPatientInputEnvelope", {})
export class DocumentStoreCreateManyPatientInputEnvelope {
  @TypeGraphQL.Field(_type => [DocumentStoreCreateManyPatientInput], {
    nullable: false
  })
  data!: DocumentStoreCreateManyPatientInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
