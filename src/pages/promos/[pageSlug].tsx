import { gql, request } from '@lib/datocms/datocms'
import { Heading1, Paragraph2, Container, styled, css } from '@theme'
import { Layout } from '@components/layout'
import { ClientLogoBanner } from '@components/client-logo-banner'
import { ReviewsIoWidget } from '@components/reviews-io-widget'
import {
  GetLandingPageSlugsQuery,
  GetLandingPageQuery,
} from '@lib/datocms/__generated__/types'
import { markdownToDast, ThenArg } from '@utils/src'
import { StructuredText, renderRule } from 'react-datocms'
import { structuredTextRules } from '@lib/datocms/structuredTextRules'

interface PageProps {
  data?: ThenArg<ReturnType<typeof dataFunction>>
}

const HeroText = styled('div', {
  maxWidth: '60rem',
})
const ReviewBackground = styled('div', { backgroundColor: '$white', py: '$4' })

const LandingPageContent: React.FC<PageProps> = ({ data }) => {
  const beforeFooter = (
    <>
      <Container>
        <ClientLogoBanner />
      </Container>
      <ReviewBackground>
        <Container>
          <ReviewsIoWidget />
        </Container>
      </ReviewBackground>
    </>
  )

  return (
    <>
      <Layout
        title="landing page"
        description="work in progress"
        beforeFooter={beforeFooter}
        metaData={data._seoMetaTags}
      >
        <Container as="section">
          <HeroText>
            <Heading1 color="primary">{data.title}</Heading1>
            <Paragraph2>
              A&amp;O is Sydney’s premier Mail House, providing end-to-end
              Print, Direct Mail and Fulfilment services.
            </Paragraph2>
            <StructuredText
              data={data.content.document}
              customRules={structuredTextRules({
                headingProps: { color: 'primary' },
              })}
            />
          </HeroText>
        </Container>
      </Layout>
    </>
  )
}

export default LandingPageContent

export async function getStaticPaths() {
  //@ts-ignore
  const allLandingPages: GetLandingPageSlugsQuery = await request({
    query: 'GetLandingPageSlugs',
  })
  return {
    paths: allLandingPages.allLandingPageV1s.map(
      (page) => `/promos/${page.pageSlug}` || []
    ),
    fallback: false,
  }
}

async function dataFunction({
  landingPageV1: { pageContent, ...rest },
}: GetLandingPageQuery) {
  const content = await markdownToDast(pageContent)
  return {
    contentMarkdown: pageContent,
    content,
    ...rest,
  }
}

export async function getStaticProps({ params, preview = false }) {
  const data: GetLandingPageQuery = await request({
    query: 'GetLandingPage',
    preview,
    variables: { pageSlug: params.pageSlug },
  })

  const _data = await dataFunction(data)

  return {
    props: {
      data: _data,
    },
  }
}
