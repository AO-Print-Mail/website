import { gql, request } from '../lib/datocms/datocms'
import { Heading1, Paragraph2, Container, styled, css } from '@theme'
import { Layout } from '@components/layout'
import { ClientLogoBanner } from '@components/client-logo-banner'
import { ReviewsIoWidget } from '@components/reviews-io-widget'
import { AllLandingPagesQuery } from '../lib/datocms/__generated__/types'

interface PageProps {
  data: AllLandingPagesQuery['allLandingPageV1s']
}

const HeroText = styled('div', {
  maxWidth: '60rem',
})
const ReviewBackground = styled('div', { backgroundColor: '$white', py: '$4' })

export async function getStaticProps() {
  const data = await request({
    query: 'AllLandingPages',
    variables: { limit: 1 },
  })
  return {
    props: {
      data,
    },
  }
}
export default function LandingPageContent({ data }) {
  console.log(data)
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
