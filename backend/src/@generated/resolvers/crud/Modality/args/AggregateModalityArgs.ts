import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ModalityOrderByWithRelationInput } from "../../../inputs/ModalityOrderByWithRelationInput";
import { ModalityWhereInput } from "../../../inputs/ModalityWhereInput";
import { ModalityWhereUniqueInput } from "../../../inputs/ModalityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateModalityArgs {
  @TypeGraphQL.Field(_type => ModalityWhereInput, {
    nullable: true
  })
  where?: ModalityWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ModalityOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ModalityOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ModalityWhereUniqueInput, {
    nullable: true
  })
  cursor?: ModalityWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
