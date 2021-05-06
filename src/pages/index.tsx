import {
  styled,
  Container,
  Box,
  Heading2,
  Title,
  Spacer,
  TextHolder,
} from '@theme'
import { Layout } from '@components/layout'
import { HomePageBody } from '@components/home-page-body'
import { GetHomePageQuery } from '@lib/datocms/__generated__/types'
import { request } from '@lib/datocms/datocms'
import type { Awaited } from '@utils/src'
import { StructuredText } from 'react-datocms'
import { structuredTextRules } from '@lib/datocms/structuredText'
import { QuoteCta } from '@components/quote-cta'
import { ClientLogoBanner } from '@components/client-logo-banner'
import { ArticleListCard } from '@components/article-list-card'
import { ArticleSummary } from '@components/article-summary'

interface PageProps {
  data?: Awaited<ReturnType<typeof getStaticProps>>['props']['data']
}

const ParagraphText = ({ data, size }) => {
  return (
    <StructuredText
      data={data}
      customRules={structuredTextRules({
        paragraphProps: { size },
        listItemProps: {
          icon: 'CheckLeaf',
          iconProps: {
            css: {
              color: '$green',
              size: '1.125em',
              marginBottom: '0.125em',
            },
          },
        },
      })}
    />
  )
}
const LandingPageContent: React.FC<PageProps> = ({ data }) => {
  const featureSections = data.contentSections.map((f) => (
    <Box
      key={f.heading}
      css={{ '@initial': { px: '$2' }, '@m': { px: '$3' }, '@l': { px: '$4' } }}
    >
      <Heading2>{f.heading}</Heading2>
      <ParagraphText data={f.paragraph} size="m" />
    </Box>
  ))
  return (
    <Layout
      canonicalPath="https://www.aomail.com.au"
      //@ts-ignore
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
            pt: '$7',
            pb: '$9',
            '@m': { minHeight: '680px' },
            '@l': { display: 'flex', pt: '$8', pb: '$9' },
          }}
        >
          <TextHolder
            css={{
              '@m': { mr: '16.67%' },
              '@l': { mr: '33.3%' },
              '@xl': { mr: '50%' },
            }}
          >
            <ArticleSummary
              title={data.mainHeading}
              summary={data.heroParagraph.value}
            />
          </TextHolder>
        </Container>
      </Box>
      <Container>
        <ArticleListCard
          data={data.cardData}
          css={{ top: '-$7', '@l': { top: '-$6' } }}
        />
      </Container>
      <Box css={{ mt: '$10' }}></Box>
      <Box css={{ my: '$7' }}>
        <Container>
          <QuoteCta
            css={{ mb: '$7' }}
            paragraph="Get a competitive quote for your next job now. Our friendly team of experts are standing by to complete your project with ease and to make the process as seamless as possible."
          />
          <ClientLogoBanner />
        </Container>
      </Box>
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const { homepage }: GetHomePageQuery = await request({
    query: 'GetHomePage',
    preview,
    variables: {},
  })
  const data = {
    ...homepage,
    cardData: homepage.serviceCards.map((card) => ({
      title: card.title,
      image: card.image.responsiveImage,
      description: card.description,
      link: card.linkTarget.pageSlug,
      linkText: card.linkText,
    })),
  }

  return {
    props: {
      data,
    },
  }
}

export default LandingPageContent
