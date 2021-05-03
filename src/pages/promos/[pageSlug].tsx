import { request } from '@lib/datocms/datocms'
import { Heading1, Box, Container, styled } from '@theme'
import { Layout } from '@components/layout'
import { ClientLogoBanner } from '@components/client-logo-banner'
import { ReviewsIoWidget } from '@components/reviews-io-widget'
import {
  GetLandingPagesQuery,
  GetLandingPageQuery,
} from '@lib/datocms/__generated__/types'
import { ThenArg } from '@utils/src'
import { StructuredText } from 'react-datocms'
import { structuredTextRules } from '@lib/datocms/structuredText'
import { LandingPageQuoteForm } from '@components/landing-page-quote-form'
import { Header } from '@components/header-landing'

interface PageProps {
  data?: ThenArg<ReturnType<typeof getStaticProps>>['props']['data']
  pageSlug: string
}

const HeroText = styled('div', {
  '@l': {
    pr: '$2',
    pl: '$3',
    width: '50%',
  },
  '@xl': {
    pr: '$3',
    pl: '$4',
  },
})

const LandingPageContent: React.FC<PageProps> = ({ data }) => {
  const beforeFooter = (
    <>
      <Container>
        <ClientLogoBanner />
      </Container>
      <Box css={{ backgroundColor: '$white', py: '$4' }}>
        <Container>
          <ReviewsIoWidget />
        </Container>
      </Box>
    </>
  )

  return (
    <Layout
      title="landing page"
      description="work in progress"
      beforeFooter={beforeFooter}
      //@ts-ignore
      metaData={data._seoMetaTags}
      canonicalPath={data.canonicalPath}
      footerCss={{
        paddingBottom: '$7',
        '@l': { paddingBottom: '$1' },
      }}
      landing
      altHeader={<Header />}
    >
      <Container as="section" css={{ py: '$3', '@l': { display: 'flex' } }}>
        <HeroText>
          <Heading1>{data.title}</Heading1>
          <StructuredText
            data={data.content.document}
            customRules={structuredTextRules({
              paragraphProps: { size: '2', css: { maxWidth: '60ch' } },
              headingProps: { color: 'primary' },
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
        </HeroText>
        <LandingPageQuoteForm keyword="direct mail" />
      </Container>
    </Layout>
  )
}

export default LandingPageContent

export async function getStaticPaths() {
  //@ts-ignore
  const allLandingPages: GetLandingPagesQuery = await request({
    query: 'GetLandingPages',
  })
  return {
    paths: allLandingPages.allLandingPageV1s.map(({ pageSlug }) => ({
      params: {
        pageSlug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params, preview = false }) {
  const {
    landingPageV1: { pageContent, ...rest },
  }: GetLandingPageQuery = await request({
    query: 'GetLandingPage',
    preview,
    variables: { pageSlug: params.pageSlug },
  })

  const markdownToDast = (await import('@utils/src')).markdownToDast

  const content = await markdownToDast(pageContent)

  return {
    props: {
      data: { content, ...rest },
      pageSlug: params.pageSlug,
    },
  }
}
