import { Container } from '@theme'
import { Layout } from '@components/layout'
import { ModalWrapper, ModalBackground } from '@components/modal'

interface PageProps {
  data?: {}
}

const LandingPageContent: React.FC<PageProps> = ({ data }) => {
  return (
    <>
      <Layout title="landing page" description="work in progress" metaData={[]}>
        <Container
          as="section"
          css={{ justifySelf: 'stretch', height: '824px', pb: '$4' }}
        >
          <ModalWrapper>
            <ModalBackground>
              {/* START GRAPHIC INNER */}
              {/* END GRAPHIC INNER */}
            </ModalBackground>
          </ModalWrapper>
        </Container>
      </Layout>
    </>
  )
}

export default LandingPageContent
