import { GraphQLClient, gql } from 'graphql-request'
import { getSdk, Query } from './__generated__/types'

type requestQuery = {
  preview?: boolean
  query: keyof ReturnType<typeof getSdk>
  variables?: {}
}

export function request({
  query,
  preview,
  variables = { limit: 20 },
}: requestQuery) {
  const endpoint = preview
    ? `${process.env.NEXT_DATOCMS_GRAPHQL_URL}/preview`
    : process.env.NEXT_DATOCMS_GRAPHQL_URL

  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
    },
  })

  const sdk = getSdk(client)
  return sdk[query](variables)
}

export { gql }
