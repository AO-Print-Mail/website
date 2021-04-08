import { ThenArg } from '@utils/src'
import { request } from '@lib/datocms/datocms'
import {
  GetBlogPostSummariesQuery,
  GetBlogPageQuery,
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

interface PageProps {
  data?: ThenArg<ReturnType<typeof getStaticProps>>['props']['data']
}

const PREFETCH_ARTICLES = 4

const ListWrapper = styled(ColumnWrapper, {
  position: 'relative',
  top: '-$4',
  flexFlow: 'column wrap',
  '@m': {
    flexFlow: 'row wrap',
  },
  '@l': {
    ml: '16.67%',
  },
  '@xl': {
    ml: '25%',
    mr: '8.33%',
  },
})
const CardWrapper = styled(Column, {
  flex: '0 0 100%',

  mb: '$5',
  '@m': {
    flex: '0 0 50%',
    alignSelf: 'stretch',
  },
})

const Blog: React.FC<PageProps> = ({ data }) => {
  const router = useRouter()
  useEffect(() => {
    data.articleSummaries
      .slice(0, PREFETCH_ARTICLES)
      .forEach((article) => router.prefetch(`/blog/${article.slug}`))
  }, [])

  const handleClick = (link: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    router.push(link)
  }

  return (
    <Layout
      canonicalPath="https://www.aomail.com.au/blog"
      //@ts-ignore
      metaData={data.blogPage._seoMetaTags}
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
          <TextHolder css={{ mt: '$8', '@l': { ml: '8.33%' } }}>
            <Heading1 color="primary">{data.blogPage.title}</Heading1>
          </TextHolder>
        </Container>
      </Box>
      <Container>
        <ListWrapper>
          {data.articleSummaries.map((article) => {
            const targetUrl = `/blog/${article.slug}`
            return (
              <CardWrapper
                as="article"
                key={article.id}
                onClick={handleClick(targetUrl)}
              >
                <LinkCard
                  title={article.title}
                  description={article.summary.value}
                  image={article.mainImage.responsiveImage}
                  link={targetUrl}
                  css={{ height: '100%' }}
                />
              </CardWrapper>
            )
          })}
        </ListWrapper>
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  //@ts-expect-error
  const summaries: GetBlogPostSummariesQuery = await request({
    query: 'getBlogPostSummaries',
    preview,
  })
  const { blogPage }: GetBlogPageQuery = await request({
    query: 'GetBlogPage',
    preview,
  })
  return {
    props: {
      data: {
        articleSummaries: summaries.allBlogArticles,
        blogPage,
      },
    },
  }
}

export default Blog
