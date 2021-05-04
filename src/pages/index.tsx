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

const HeroText = styled('div', {
  willChange: 'opacity',
  '@s': {
    pr: '$2',
    pl: '$2',
    pt: '$3',
    pb: '$6',
  },
  '@m': {
    pr: '$2',
    pl: '$3',
    pt: '$6',
    width: '75%',
  },
  '@l': {
    pr: '$2',
    pl: '$4',
    width: '50%',
  },
  '@xl': {
    pr: '$3',
    pl: '$4',
  },
})

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
            '@m': { height: '680px' },
            '@l': { display: 'flex', height: '768px' },
          }}
        >
          <TextHolder
            css={{
              mt: '$6',
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

          {/* <HeroText>
            <Title>{data.mainHeading}</Title>
            <Spacer size="large" />
            <Box css={{ maxWidth: '60ch' }}>
              <ParagraphText data={data.heroParagraph} size="m" />
            </Box>
          </HeroText> */}
        </Container>
      </Box>
      <Container>
        <ArticleListCard data={data.cardData} css={{ top: '-$4' }} />
      </Container>
      <Box css={{ mt: '$10' }}>
        <HomePageBody
          cardData={data.cardData}
          featureSections={featureSections}
        />
      </Box>
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
