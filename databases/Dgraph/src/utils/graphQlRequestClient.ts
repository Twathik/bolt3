import { GraphQLClient } from 'graphql-request'
import { getSdk } from '../graphql.sdk'

const graphQLClient = new GraphQLClient('http://localhost:8080/graphql')

export const graphqlSdk = getSdk(graphQLClient)
