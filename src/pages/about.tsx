import { ThenArg } from '@utils/src'
import { styled, Container, Heading1, Box, HomePattern, Heading2 } from '@theme'
import { Layout } from '@components/layout'
import { GetAboutUsQuery } from '@lib/datocms/__generated__/types'
import { request } from '@lib/datocms/datocms'
import { StructuredText } from 'react-datocms'
import { ClientLogoBanner } from '@components/client-logo-banner'

interface PageProps {
  data?: ThenArg<ReturnType<typeof getStaticProps>>['props']['data']
}

export async function getStaticProps({ params, preview = false }) {
  const { aboutUsPage }: GetAboutUsQuery = await request({
    query: 'GetAboutUs',
    preview,
    variables: {},
  })
  const data = {
    ...aboutUsPage,
  }

  return {
    props: {
      data,
    },
  }
}
