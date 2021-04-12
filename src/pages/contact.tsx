import { ThenArg } from '@utils/src'
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

const PREFETCH_ARTICLES = 3

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

const Contact: React.FC<PageProps> = ({ data }) => {
  const router = useRouter()
  useEffect(
    () => {
      data.articleSummaries
        .slice(0, PREFETCH_ARTICLES)
        .forEach((article) => router.prefetch(`/blog/${article.slug}`))
    },
    //need to add param here if filtering is being used
    //if queries being made on the client, need to check package.json[browser]
    []
  )

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
      <Container></Container>
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  return {
    props: {},
  }
}

export default Contact
