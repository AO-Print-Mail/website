import { gql, request } from '@lib/datocms/datocms'
import { Heading1, Box, Container, styled } from '@theme'
import { Layout } from '@components/layout'
import { Button } from '@components/button'
import { ClientLogoBanner } from '@components/client-logo-banner'
import { ReviewsIoWidget } from '@components/reviews-io-widget'
import {
  GetLandingPageSlugsQuery,
  GetLandingPageQuery,
} from '@lib/datocms/__generated__/types'
import { markdownToDast, ThenArg } from '@utils/src'
import { StructuredText, renderRule } from 'react-datocms'
import { structuredTextRules } from '@lib/datocms/structuredTextRules'

interface PageProps {
  data?: ThenArg<ReturnType<typeof dataFunction>>
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

const FormBackground = styled('div', {
  background: '$white',
  minHeight: '$9',
  position: 'fixed',
  display: 'block',
  zIndex: '$1',
  left: '0',
  bottom: '0',
  right: '0',
  boxShadow: '$footer',
  when: {
    l: {
      boxShadow: '$3',
      position: 'relative',
      br: '$5',
      ml: '$2',
      mt: '$7',
      width: '50%',
    },
    xl: {
      width: 'calc(100% / 12 * 5)',
    },
  },
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
        metaData={data._seoMetaTags}
      >
        <Container as="section" css={{ when: { l: { display: 'flex' } } }}>
          <HeroText>
            <Heading1 color="primary">{data.title}</Heading1>
            <Box css={{ maxWidth: '60ch' }}>
              <StructuredText
                data={data.content.document}
                customRules={structuredTextRules({
                  headingProps: { color: 'primary' },
                  listItemProps: {
                    icon: 'Check',
                    iconProps: { css: { color: '$green' } },
                  },
                })}
              />
            </Box>
          </HeroText>
          <FormBackground>
            <Container>
              <Button fullWidth={{ initial: 'true', m: 'false', l: 'true' }}>
                Start your direct mail quote
              </Button>
            </Container>
          </FormBackground>
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

async function dataFunction({
  landingPageV1: { pageContent, ...rest },
}: GetLandingPageQuery) {
  const content = await markdownToDast(pageContent)
  return {
    contentMarkdown: pageContent,
    content,
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
