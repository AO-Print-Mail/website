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
  Heading1,
  TextHolder,
  ColumnWrapper,
  styled,
  Column,
} from '@theme'
import { LinkCard } from '@components/link-card'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { ArticleSummary } from '@components/article-summary'
import { title } from 'process'

interface PageProps {
  data?: ThenArg<ReturnType<typeof getStaticProps>>['props']['data']
}

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
            pt: '$6',
            height: '$280px',
            '@m': { height: '400px' },
          }}
        >
          <TextHolder css={{ mt: '$7', '@l': { ml: '8.33%' } }}>
            <ArticleSummary title={data.title} />
          </TextHolder>
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
  return {
    props: {
      data: blogArticle,
    },
  }
}

export default Blog
