import { useState, useEffect } from 'react'
import { Heading1, Paragraph2, Container, styled, css } from '@theme'
import { Layout } from '@components/layout'

const HeroText = styled('div', {
  maxWidth: '60rem',
})
const ReviewContainer = styled('div', { backgroundColor: '$white', py: '$4' })

const ReviewWidgetGuff =
  'richSnippetReviewsWidgets("carousel-widget", { store: "https-www.aomail.com.au", primaryClr: "#558c46", neutralClr: "#dbdcdd", reviewTextClr: "#32334A", widgetName: "carousel", layout: "fullWidth", numReviews: 40, contentMode: "company;third-party", hideDates: false,})'

export default function Home() {
  const [widgetScript, setWidgetScript] = useState(null)
  useEffect(() => {
    const script = document.createElement('script')
    script.innerHTML = ReviewWidgetGuff
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])
  return (
    <>
      <Layout title="landing page" description="work in progress">
        <Container as="section">
          <HeroText>
            <Heading1 color="primary">Australian Direct Mail Services</Heading1>
            <Paragraph2>
              A&amp;O is Sydney’s premier Mail House, providing end-to-end
              Print, Direct Mail and Fulfilment services.
            </Paragraph2>
          </HeroText>
        </Container>
        <ReviewContainer>
          <Container>
            <div id="carousel-widget"></div>
          </Container>
        </ReviewContainer>
      </Layout>

      {widgetScript}
    </>
  )
}
