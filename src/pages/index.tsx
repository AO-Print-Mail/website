import {
  Container,
  Flex,
  Box,
  MailIllustration,
  Heading4,
  Paragraph3,
  styled,
} from '@theme'
import { Layout } from '@components/layout'
import { ModalWrapper, ModalBackground } from '@components/modal'
import { Button } from '@components/button'
import {
  LandingPageQuoteForm,
  Step1,
  Step2,
  ConfirmationPage,
} from '@components/landing-page-quote-form'

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
              <ConfirmationPage />
              {/* END GRAPHIC INNER */}
            </ModalBackground>
          </ModalWrapper>
        </Container>
      </Layout>
    </>
  )
}

export default LandingPageContent
