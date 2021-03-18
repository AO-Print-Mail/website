import { GraphQLClient } from 'graphql-request'
import { getSdk } from './__generated__/types'

interface requestQuery {
  preview?: boolean
  query: keyof ReturnType<typeof getSdk>
  variables?: Parameters<ReturnType<typeof getSdk>[requestQuery['query']]>[0]
  pageHeaders?: Parameters<ReturnType<typeof getSdk>[requestQuery['query']]>[1]
}

export async function request({
  query,
  preview,
  pageHeaders,
  variables,
}: requestQuery) {
  const endpoint = preview
    ? `${process.env.NEXT_DATOCMS_GRAPHQL_URL}/preview`
    : process.env.NEXT_DATOCMS_GRAPHQL_URL

  const GraphQLClient = await import('graphql-request').then(
    (res) => res.GraphQLClient
  )

  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
    },
  })

  const sdk = getSdk(client)
  //@ts-ignore
  return sdk[query](variables, pageHeaders)
}
