/* eslint-disable @typescript-eslint/ban-types */
import { NonEmptyArray, buildSchemaSync } from 'type-graphql'
import { resolvers as GeneratedResolvers } from './@generated'
import * as resolvers from './Resolvers'

const AppResolvers = Object.values(
  resolvers,
) as unknown as NonEmptyArray<Function>

const schema = buildSchemaSync({
  resolvers: [...GeneratedResolvers, ...AppResolvers],
  // resolvers: GeneratedResolvers,
  validate: false,
})

export default schema
