import { Layout } from '@components/layout'
import { ClientLogoBanner } from '@components/client-logo-banner'
import { ReviewsIoWidget } from '@components/reviews-io-widget'
import { Header } from '@components/header-landing'
import { Container, Spacer, Box } from '@theme'

const beforeFooter = (
  <>
    <Container>
      <ClientLogoBanner />
    </Container>
    <Spacer size="large" />
    <Box css={{ backgroundColor: '$white', py: '$4' }}>
      <Container>
        <ReviewsIoWidget />
      </Container>
    </Box>
  </>
)

const Jm: React.FC<{}> = ({}) => {
  return (
    <Layout
      title="landing page"
      description="work in progress"
      beforeFooter={beforeFooter}
      landing
      altHeader={<Header />}
    >
      <Container></Container>
    </Layout>
  )
}

export default Jm
