import {
  styled,
  Container,
  Heading1,
  Box,
  Paragraph3,
  HomePattern,
} from '@theme'
import { Layout } from '@components/layout'
import { HomePageBody } from '@components/home-page-body'

interface PageProps {
  data?: {}
}

const HeroText = styled('div', {
  willChange: 'opacity',
  '@s': {
    pr: '$2',
    pl: '$3',
    pt: '$3',
  },
  '@m': {
    pr: '$2',
    pl: '$3',
    pt: '$6',
    width: '75%',
  },
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
  return (
    <Layout
      canonicalPath="HOME_PAGE"
      title="landing page"
      description="work in progress"
      metaData={[]}
      footerCss={{
        paddingBottom: '$7',
        '@l': { paddingBottom: '$1' },
      }}
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
            height: '680px',
            pt: '$6',
            '@l': { display: 'flex', height: '800px', pt: '$7' },
          }}
        >
          <HomePattern
            css={{
              height: '240px',
              width: 'auto',
              position: 'absolute',
              right: '-$7',
              top: '$7',
              display: 'none',
              '@s': { right: '-$6', height: '300px' },
              '@m': {
                top: '0',
                display: 'block',
                height: '100%',
                right: '-$10',
              },
              '@l': { right: '-$4', top: '0' },
            }}
          />
          <HeroText>
            <Heading1 color="primary">
              Exceptional Direct Mail, Print and Fulfilment services
            </Heading1>
            <Box css={{ maxWidth: '60ch', mt: '-$4' }}>
              <Paragraph3 color="primary">
                A&amp;O is Sydney’s premier Mail House, providing end-to-end
                Print, Direct Mail and Fulfilment services to over 700
                Australian and global clients.
              </Paragraph3>
              <Paragraph3 color="primary">
                We exist to offer your business the best possible levels of
                service when delivering your message to your customers.
              </Paragraph3>
            </Box>
          </HeroText>
        </Container>
      </Box>
      <Box>
        <HomePageBody />
      </Box>
    </Layout>
  )
}

export default LandingPageContent
