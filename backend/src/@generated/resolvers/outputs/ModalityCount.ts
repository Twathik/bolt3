import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ModalityCountWorkingListArgs } from "./args/ModalityCountWorkingListArgs";

@TypeGraphQL.ObjectType("ModalityCount", {})
export class ModalityCount {
  WorkingList!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "WorkingList",
    nullable: false
  })
  getWorkingList(@TypeGraphQL.Root() root: ModalityCount, @TypeGraphQL.Args() args: ModalityCountWorkingListArgs): number {
    return root.WorkingList;
  }
}
