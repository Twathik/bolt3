import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientCountClinicalEventArgs } from "./args/PatientCountClinicalEventArgs";
import { PatientCountConsultationListArgs } from "./args/PatientCountConsultationListArgs";
import { PatientCountWorkingListArgs } from "./args/PatientCountWorkingListArgs";

@TypeGraphQL.ObjectType("PatientCount", {})
export class PatientCount {
  ConsultationList!: number;
  ClinicalEvent!: number;
  WorkingList!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "ConsultationList",
    nullable: false
  })
  getConsultationList(@TypeGraphQL.Root() root: PatientCount, @TypeGraphQL.Args() args: PatientCountConsultationListArgs): number {
    return root.ConsultationList;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "ClinicalEvent",
    nullable: false
  })
  getClinicalEvent(@TypeGraphQL.Root() root: PatientCount, @TypeGraphQL.Args() args: PatientCountClinicalEventArgs): number {
    return root.ClinicalEvent;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "WorkingList",
    nullable: false
  })
  getWorkingList(@TypeGraphQL.Root() root: PatientCount, @TypeGraphQL.Args() args: PatientCountWorkingListArgs): number {
    return root.WorkingList;
  }
}
