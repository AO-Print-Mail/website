import { Awaited } from '@utils/src'
import { request } from '@lib/datocms/datocms'
import {
  GetLegalPagesQuery,
  GetLegalPageQuery,
} from '@lib/datocms/__generated__/types'
import { Layout } from '@components/layout'
import { Box, Container, TextHolder, ColumnWrapper, Column } from '@theme'
import { ArticleSummary } from '@components/article-summary'
import { StructuredText } from '@lib/datocms/structuredText'
import { QuoteCta } from '@components/quote-cta'

interface PageProps {
  data?: Awaited<ReturnType<typeof getStaticProps>>['props']['data']
}

const LegalPage: React.FC<PageProps> = ({ data }) => {
  return (
    <Layout
      canonicalPath={`https://www.aomail.com.au/legal/${data.legalPageSlug}`}
      //@ts-expect-error
      metaData={data._seoMetaTags}
      layoutElement="article"
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
              as="section"
              breadcrumbLinks={[{ name: 'Legal', url: '/legal' }]}
              title={data.title}
              summary={data.summary.value}
            />
          </TextHolder>
        </Container>
      </Box>
      <Box>
        <Container css={{ mb: '$7' }}>
          <ColumnWrapper
            css={{
              flexFlow: 'column nowrap',
              justifyContent: 'stretch',
              pb: '$7',
              '@l': { flexFlow: 'row nowrap' },
            }}
          >
            <Column
              css={{ flex: '1 1', display: 'flex', flexFlow: 'column nowrap' }}
            >
              <TextHolder css={{ maxWidth: '80ch', alignSelf: 'center' }}>
                <StructuredText
                  data={data.legalText}
                  config={{
                    paragraphProps: { size: 's' },
                    headingProps: { css: { mt: '$6' }, fromSize: '3' },
                  }}
                />
              </TextHolder>
            </Column>
            <Column
              as="aside"
              css={{
                display: 'none',
                '@l': { display: 'block', order: '1', flex: '0 0 8.33%' },
              }}
            ></Column>
            <Column
              css={{ '@l': { order: '-1', flex: '0 0 16.67%' } }}
              as="aside"
            ></Column>
          </ColumnWrapper>
          <QuoteCta />
        </Container>
      </Box>
    </Layout>
  )
}

export async function getStaticPaths() {
  //@ts-expect-error
  const { allLegalPages }: GetLegalPagesQuery = await request({
    query: 'GetLegalPages',
  })
  return {
    paths: allLegalPages.map(({ legalPageSlug }) => ({
      params: { legalPageSlug },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ preview = false, params }) {
  const { legalPage }: GetLegalPageQuery = await request({
    query: 'GetLegalPage',
    preview,
    variables: { legalPageSlug: params.legalPageSlug },
  })

  return {
    props: {
      data: { ...legalPage },
    },
  }
}

export default LegalPage
