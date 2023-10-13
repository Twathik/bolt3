import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ConsultationListWhereInput } from "../../inputs/ConsultationListWhereInput";

@TypeGraphQL.ArgsType()
export class PatientCountConsultationListArgs {
  @TypeGraphQL.Field(_type => ConsultationListWhereInput, {
    nullable: true
  })
  where?: ConsultationListWhereInput | undefined;
}
