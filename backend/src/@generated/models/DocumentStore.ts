import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Patient } from "../models/Patient";
import { PatientDocumentType } from "../enums/PatientDocumentType";

@TypeGraphQL.ObjectType("DocumentStore", {})
export class DocumentStore {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  patient?: Patient;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  patientId!: string;

  @TypeGraphQL.Field(_type => PatientDocumentType, {
    nullable: false
  })
  patientDocumentType!: "folder" | "document";

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  content?: Buffer | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  textContent?: string | null;
}
