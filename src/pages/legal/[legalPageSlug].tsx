import { Awaited } from '@utils/src'
import { request } from '@lib/datocms/datocms'
import {
  GetLegalPagesQuery,
  GetLegalPageQuery,
} from '@lib/datocms/__generated__/types'
import { Layout } from '@components/layout'
import {
  Box,
  Container,
  TextHolder,
  ColumnWrapper,
  Column,
  Paragraph,
} from '@theme'
import { ArticleSummary } from '@components/article-summary'
import { renderRule } from 'react-datocms'
import { isHeading as isHeadingGuard } from 'datocms-structured-text-utils'
import { StructuredText } from '@lib/datocms/structuredText'
import { QuoteCta } from '@components/quote-cta'

interface PageProps {
  data?: Awaited<ReturnType<typeof getStaticProps>>['props']['data']
}

const isHeading = () =>
  renderRule(isHeadingGuard, ({ node, key, children }) => {
    switch (node.level) {
      case 1:
        return (
          <Paragraph size="1" semiBold as="h1" key={key}>
            {children}
          </Paragraph>
        )
      case 2:
        return (
          <Paragraph size="1" semiBold as="h2" key={key}>
            {children}
          </Paragraph>
        )
      case 3:
        return (
          <Paragraph size="l" semiBold as="h3" key={key}>
            {children}
          </Paragraph>
        )
      case 4:
        return (
          <Paragraph size="l" semiBold as="h4" key={key}>
            {children}
          </Paragraph>
        )
      case 5:
        return (
          <Paragraph size="l" semiBold as="h5" key={key}>
            {children}
          </Paragraph>
        )
      case 6:
        return (
          <Paragraph size="l" semiBold as="h6" key={key}>
            {children}
          </Paragraph>
        )
    }
  })

const LegalPage: React.FC<PageProps> = ({ data }) => {
  return (
    <Layout
      canonicalPath={`https://www.aomail.com.au/legal/${data.legalPageSlug}`}
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
              summary={data.summary}
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
                    paragraphProps: { size: '4', color: 'primary' },
                    headingProps: { css: { mt: '$6' }, fromSize: '3' },
                    ruleOverrides: { isHeading },
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
