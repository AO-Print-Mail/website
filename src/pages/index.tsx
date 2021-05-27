import { Container, Box, Heading2, TextHolder, styled } from '@theme'
import { Layout } from '@components/layout'
import { ModularContent } from '@lib/datocms/blockRules'
import { GetHomePageQuery } from '@lib/datocms/__generated__/types'
import { request } from '@lib/datocms/datocms'
import type { Awaited } from '@utils/src'
import { StructuredText } from 'react-datocms'
import { structuredTextRules } from '@lib/datocms/structuredText'
import { QuoteCta } from '@components/quote-cta'
import { ClientLogoBanner } from '@components/client-logo-banner'
import { ArticleListCard } from '@components/list-card'
import { ArticleSummary } from '@components/article-summary'
import { default as DH } from '@svg/desktop-hero.svg'
import { QuoteButton } from '@components/quoteButton'

interface PageProps {
  data?: Awaited<ReturnType<typeof getStaticProps>>['props']['data']
}

const DesktopHero = styled(DH, {
  position: 'absolute',
  top: '0',
  height: '1024px',
  display: 'none',
  '@l': {
    display: 'block',
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
            pb: '$7',
            '@m': { minHeight: '680px' },
            '@l': { display: 'flex', pt: '$8' },
          }}
        >
          <DesktopHero />
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
            <QuoteButton
              css={{
                mt: '$6',
                width: '$11',
                minHeight: '$5',
                '@m': { width: '$12' },
              }}
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
      <Box css={{ mt: '$6' }}>
        <Container>
          <ModularContent
            //@ts-ignore
            data={data.contentSections}
          />
        </Container>
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
