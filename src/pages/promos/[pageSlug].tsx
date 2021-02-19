import { gql, request } from '@lib/datocms/datocms'
import { Heading1, Paragraph2, Container, styled, css } from '@theme'
import { Layout } from '@components/layout'
import { ClientLogoBanner } from '@components/client-logo-banner'
import { ReviewsIoWidget } from '@components/reviews-io-widget'
import {
  GetLandingPageSlugsQuery,
  GetLandingPageQuery,
} from '@lib/datocms/__generated__/types'
import { htmlToDast, markdownToHtml, markdownToDast } from '@utils/src'

interface PageProps {
  data?: ReturnType<typeof dataFunction>
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
  console.log(data.contentMarkdown)
  console.log(JSON.stringify(data.contentDash, null, 4))
  /*console.log(
    data.contentMarkdown
  )*/

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
            <Heading1 color="primary">Australian Direct Mail Services</Heading1>
            <Paragraph2>
              A&amp;O is Sydney’s premier Mail House, providing end-to-end
              Print, Direct Mail and Fulfilment services.
            </Paragraph2>
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

function dataFunction({
  landingPageV1: { pageContent, ...rest },
}: GetLandingPageQuery) {
  return {
    contentMarkdown: pageContent,
    contentDash: markdownToDast(pageContent),
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
