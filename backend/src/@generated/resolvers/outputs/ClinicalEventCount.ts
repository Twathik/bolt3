import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClinicalEventCountWorkingListArgs } from "./args/ClinicalEventCountWorkingListArgs";

@TypeGraphQL.ObjectType("ClinicalEventCount", {})
export class ClinicalEventCount {
  WorkingList!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "WorkingList",
    nullable: false
  })
  getWorkingList(@TypeGraphQL.Root() root: ClinicalEventCount, @TypeGraphQL.Args() args: ClinicalEventCountWorkingListArgs): number {
    return root.WorkingList;
  }
}
