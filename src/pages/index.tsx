import { gql, request } from '@lib/datocms/datocms'
import { Heading1, Paragraph2, Container, styled, css } from '@theme'
import { Layout } from '@components/layout'
import { ClientLogoBanner } from '@components/client-logo-banner'
import { ReviewsIoWidget } from '@components/reviews-io-widget'
import {
  GetLandingPageQuery,
  GetLandingPageQueryVariables,
} from '@lib/datocms/__generated__/types'

interface PageProps {
  data?: GetLandingPageQuery
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
        metaData={[]}
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
