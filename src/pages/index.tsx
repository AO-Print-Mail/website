import Head from 'next/head'
import { Heading1, Paragraph2, Container, styled } from '@theme'
import { Layout } from '@components/layout/src'

const HeroText = styled('div', {
  maxWidth: '60rem',
})

export default function Home() {
  return (
    <Layout title="landing page" description="work in progress">
      <Container as="section">
        <HeroText>
          <Heading1 color="primary">Australian Direct Mail Services</Heading1>
          <Paragraph2>
            A&amp;O is Sydney’s premier Mail House, providing end-to-end Print,
            Direct Mail and Fulfilment services.
          </Paragraph2>
        </HeroText>
      </Container>
    </Layout>
  )
}
