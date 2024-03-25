import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCountClinicalEventArgs } from "./args/UserCountClinicalEventArgs";
import { UserCountWorkingListArgs } from "./args/UserCountWorkingListArgs";

@TypeGraphQL.ObjectType("UserCount", {})
export class UserCount {
  WorkingList!: number;
  ClinicalEvent!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "WorkingList",
    nullable: false
  })
  getWorkingList(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountWorkingListArgs): number {
    return root.WorkingList;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "ClinicalEvent",
    nullable: false
  })
  getClinicalEvent(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountClinicalEventArgs): number {
    return root.ClinicalEvent;
  }
}
