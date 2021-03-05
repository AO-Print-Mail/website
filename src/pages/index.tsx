import { styled, Container, Heading1, Box, Paragraph2 } from '@theme'
import { Layout } from '@components/layout'
import { ClientLogoBanner } from '@components/client-logo-banner'
import { ReviewsIoWidget } from '@components/reviews-io-widget'
import { QuoteFormWrapper } from '@components/quote-form-wrapper'
import {
  LandingPageQuoteForm,
  LandingPageQuoteFormCopy,
} from '@components/landing-page-quote-form'
import { useCycle } from 'framer-motion'

interface PageProps {
  data?: {}
}

const HeroText = styled('div', {
  when: {
    l: {
      pr: '$2',
      pl: '$3',
      width: '50%',
    },
    xl: {
      pr: '$3',
      pl: '$4',
    },
  },
})

const LandingPageContent: React.FC<PageProps> = ({ data }) => {
  const [formIsOpen, toggleFormIsOpen] = useCycle(false, true)
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
      canonicalPath="HOME_PAGE"
      title="landing page"
      description="work in progress"
      beforeFooter={beforeFooter}
      metaData={[]}
      footerCss={{
        paddingBottom: '$7',
        when: { l: { paddingBottom: '$1' } },
      }}
    >
      <Container as="section" css={{ when: { l: { display: 'flex' } } }}>
        <HeroText>
          <Heading1 color="primary">
            Exceptional Direct Mail, Print and Fulfilment services
          </Heading1>
          <Box css={{ maxWidth: '60ch' }}>
            <Paragraph2>
              A&amp;O is Sydney’s premier Mail House, providing end-to-end
              Print, Direct Mail and Fulfilment services to over 700 Australian
              and global clients.
            </Paragraph2>
            <Paragraph2>
              We exist to offer your business the best possible levels of
              service when delivering your message to your customers.
            </Paragraph2>
          </Box>
        </HeroText>
        <LandingPageQuoteFormCopy
          isOpen={formIsOpen}
          toggleIsOpen={toggleFormIsOpen}
          keyword="direct mail"
        />
      </Container>
    </Layout>
  )
}

export default LandingPageContent
