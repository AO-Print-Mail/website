import { GraphQLClient, gql } from 'graphql-request'
import { getSdk, Query } from './__generated__/types'

interface requestQuery {
  preview?: boolean
  query: keyof ReturnType<typeof getSdk>
  variables?: Parameters<ReturnType<typeof getSdk>[requestQuery['query']]>[0]
  pageHeaders?: Parameters<ReturnType<typeof getSdk>[requestQuery['query']]>[1]
}

export function request({
  query,
  preview,
  pageHeaders,
  variables,
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
  //@ts-ignore
  return sdk[query](variables, pageHeaders)
}

export { gql }
