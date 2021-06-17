import { styled, Container, Box, TextHolder } from '@theme'
import { Layout } from '@components/layout'
import React, { useRef } from 'react'
import { ArticleSummary } from '@components/article-summary'
import { request } from '@lib/datocms/datocms'
import { GetPdfCredentialsPageQuery } from '@lib/datocms/__generated__/types'
import { Awaited } from '@utils/src'

interface PageProps {}

interface PageProps {
  data?: Awaited<ReturnType<typeof getStaticProps>>['props']['data']
}

const PdfCredentialsPage: React.FC<PageProps> = ({ data }) => {
  return (
    <Layout
      canonicalPath="https://www.aomail.com.au/pdf-credentials"
      //@ts-ignore
      metaData={data?.credentialsPage?._seoMetaTags}
    >
      <Box
        css={{
          backgroundColor: '$N10',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container
          css={{
            py: '$7',
            minHeight: '$280px',
            '@m': { minHeight: '400px' },
          }}
        >
          <TextHolder
            css={{
              mt: '$6',
              '@m': { mr: '16.67%' },
              '@l': { ml: '8.33%', mr: '33.3%' },
              '@xl': { ml: '8.33%', mr: '50%' },
            }}
          >
            <ArticleSummary
              breadcrumbLinks={[
                { name: 'PDF Credentials', url: '/pdf-credentials' },
              ]}
              title="A&amp;O Credentials"
              summary="To view the presentation in full screen, tap the square button in the bottom right of the presentation"
            />
          </TextHolder>
        </Container>
      </Box>
      <iframe
        src="https://player.flipsnack.com?hash=RTdFNUM1RUVGQjUrZGgzNm1qdDZyaA=="
        width="100%"
        height="640"
        seamless
        scrolling="no"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const { credentialsPage }: GetPdfCredentialsPageQuery = await request({
    query: 'GetPdfCredentialsPage',
    preview,
  })
  return {
    props: {
      data: {
        credentialsPage,
      },
    },
  }
}

export default PdfCredentialsPage
