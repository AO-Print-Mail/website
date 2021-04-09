import { ThenArg } from '@utils/src'
import { request } from '@lib/datocms/datocms'
import {
  GetBlogPostQuery,
  GetBlogPostPathsQuery,
} from '@lib/datocms/__generated__/types'
import { Layout } from '@components/layout'
import {
  Box,
  Container,
  TextHolder,
  styled,
  ColumnWrapper,
  Column,
} from '@theme'
import { ArticleSummary } from '@components/article-summary'
import { Image, renderRule } from 'react-datocms'
import dynamic from 'next/dynamic'
import { isHeading } from 'datocms-structured-text-utils'

interface PageProps {
  data?: ThenArg<ReturnType<typeof getStaticProps>>['props']['data']
}

const H1 = dynamic(import('@theme').then((res) => res.Heading3))
const H2 = dynamic(import('@theme').then((res) => res.Heading4))
const H3 = dynamic(import('@theme').then((res) => res.Heading5))
const H4 = dynamic(import('@theme').then((res) => res.Heading6))

const articleRules = [
  renderRule(isHeading, ({ node, key, children }) => {
    switch (node.level) {
      case 1:
        return (
          //@ts-expect-error
          <H1 as="h1" key={key}>
            {children}
          </H1>
        )
      case 2:
        return (
          //@ts-expect-error
          <H2 as="h2" key={key}>
            {children}
          </H2>
        )
      case 3:
        return (
          //@ts-expect-error
          <H3 as="h3" key={key}>
            {children}
          </H3>
        )
      case 4:
        return (
          //@ts-expect-error
          <H4 as="h4" key={key}>
            {children}
          </H4>
        )
      case 5:
        return (
          //@ts-expect-error
          <H4 as="h5" key={key}>
            {children}
          </H4>
        )
      case 6:
        return (
          //@ts-expect-error
          <H4 as="h6" key={key}>
            {children}
          </H4>
        )
    }
  }),
]

const Img = styled(Image, {
  position: 'relative',
  width: '100vw',
  mx: '-50vw',
  left: '50%',
  right: '50%',
  top: '-$4',
  '@l': {
    br: '$2',
    width: 'auto',
    mx: '0',
    left: 'auto',
    right: 'auto',
  },
})

const Blog: React.FC<PageProps> = ({ data }) => {
  return (
    <Layout
      canonicalPath={`https://www.aomail.com.au/blog/${data.slug}`}
      //@ts-expect-error
      metaData={data._seoMetaTags}
    >
      <Box
        as="section"
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
              title={data.title}
              lastUpdated={data.lastUpdated}
              summary={data.summary.value}
              //@ts-expect-error
              as="section"
            />
          </TextHolder>
        </Container>
      </Box>
      <Box as="article">
        <Container css={{ position: 'static' }}>
          <ColumnWrapper
            css={{
              flexFlow: 'column nowrap',
              justifyContent: 'stretch',
              '@l': { flexFlow: 'row nowrap' },
            }}
          >
            <Column css={{ flex: '1 1' }}>
              <Img data={data.mainImage.responsiveImage} />
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
        </Container>
      </Box>
    </Layout>
  )
}

export async function getStaticPaths() {
  //@ts-expect-error
  const { allBlogArticles }: GetBlogPostPathsQuery = await request({
    query: 'getBlogPostPaths',
  })
  return {
    paths: allBlogArticles.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ preview = false, params }) {
  const { blogArticle }: GetBlogPostQuery = await request({
    query: 'getBlogPost',
    preview,
    variables: { pageSlug: params.slug },
  })
  const englishOrdinalRules = new Intl.PluralRules('en', { type: 'ordinal' })
  const suffixes = {
    one: 'st',
    two: 'nd',
    few: 'rd',
    other: 'th',
  }
  function appendOrdinal(number: number) {
    return number + suffixes[englishOrdinalRules.select(number)]
  }
  const date = new Date(blogArticle.updatedAt)
  const lastUpdated = `${appendOrdinal(
    date.getDate()
  )} ${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`

  return {
    props: {
      data: { ...blogArticle, lastUpdated },
    },
  }
}

export default Blog
