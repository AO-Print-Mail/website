import { request } from '@lib/datocms/datocms'
import {
  Box,
  Container,
  styled,
  TextHolder,
  BreakoutTextHolder,
  Title,
  Spacer,
} from '@theme'
import { Layout } from '@components/layout'
import { ClientLogoBanner } from '@components/client-logo-banner'
import { ReviewsIoWidget } from '@components/reviews-io-widget'
import {
  GetServicePageQuery,
  GetServicePagesQuery,
} from '@lib/datocms/__generated__/types'
import { Awaited } from '@utils/src'
import { StructuredText } from 'react-datocms'
import { structuredTextRules } from '@lib/datocms/structuredText'
import {
  structuredTextBlockRules,
  ModularContent,
} from '@lib/datocms/blockRules'
import dynamic from 'next/dynamic'

const Printer = dynamic(import('../svg/printer.svg'))
const Inserter = dynamic(import('../svg/inserter.svg'))

const heroGraphics = {
  printing: dynamic(import('../svg/printHero.svg')),
  'direct-mail': dynamic(import('../svg/directMailHero.svg')),
  'package-fulfilment': dynamic(import('../svg/fulfilmentHero.svg')),
}

interface PageProps {
  data?: Awaited<ReturnType<typeof getStaticProps>>['props']['data']
  pageSlug: string
}

const HeroText = styled('div', {
  willChange: 'opacity',
  '@s': {
    pr: '$2',
    pl: '$2',
    pt: '$3',
    pb: '$6',
  },
  '@m': {
    pr: '$2',
    pl: '$3',
    pt: '$6',
    width: '75%',
  },
  '@l': {
    pr: '$2',
    pl: '$4',
    width: '50%',
  },
  '@xl': {
    pr: '$3',
    pl: '$4',
  },
})

const ConfiguredText = ({ data, size }) => {
  return (
    <StructuredText
      data={data}
      //@ts-expect-error
      renderBlock={structuredTextBlockRules}
      customRules={structuredTextRules({
        headingProps: { color: 'primary' },
        paragraphProps: { size },
        listItemProps: {
          icon: 'CheckLeaf',
          iconProps: {
            css: {
              color: '$green',
              size: '1.125em',
              marginBottom: '0.125em',
            },
          },
        },
      })}
    />
  )
}

const ServicePage: React.FC<PageProps> = ({ data, pageSlug }) => {
  const Illustration = (props) => {
    if (data.illustration === 'inserter') {
      return <Inserter {...props} />
    }
    if (data.illustration === 'printer') {
      return <Printer {...props} />
    }
    return null
  }
  const beforeFooter = (
    <>
      <Container css={{ mb: '$7' }}>
        <ClientLogoBanner />
      </Container>
      <Box css={{ backgroundColor: '$white', py: '$4' }}>
        <Container>
          <ReviewsIoWidget />
        </Container>
      </Box>
    </>
  )

  const HeroImageWrapper = styled('div', {
    position: 'relative',
    verticalAlign: 'top',
    bottom: '-$1',
    height: '$11',
    left: '$3',
    mt: '$4',
    p: 0,
    '@s': {
      height: '$12',
      mt: '0',
    },
    '@m': {
      height: '400px',
      left: '36vw',
      top: '-8vw',
    },
    '@l': {
      position: 'absolute',
      height: '480px',
      left: '50%',
      top: 'auto',
      bottom: '0',
    },
  })

  const HeroSvg = styled(heroGraphics[pageSlug], {
    height: '100%',
  })

  const HeroImage = () => (
    <HeroImageWrapper>
      <HeroSvg />
    </HeroImageWrapper>
  )

  return (
    <Layout
      beforeFooter={beforeFooter}
      //@ts-ignore
      metaData={data._seoMetaTags}
      canonicalPath={data.canonicalPath}
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
            pt: '$7',
            '@m': { height: '768px' },
            '@l': { display: 'flex', height: '640px' },
          }}
        >
          <HeroText>
            <Title
              css={{ marginTop: '0', '@m': { mt: '$2' }, '@l': { mt: '$4' } }}
            >
              {data.mainHeading}
            </Title>
            <Spacer />
            <Box css={{ maxWidth: '60ch', mt: '$4' }}>
              <ConfiguredText data={data.heroParagraph} size="l" />
            </Box>
          </HeroText>
          <HeroImage />
        </Container>
      </Box>
      <Box>
        <Container>
          <ModularContent
            //@ts-ignore
            data={data.leftRightParagraphs}
          />
          <TextHolder
            css={{
              '@initial': { mt: '$7' },
              '@l': {
                mx: '16.67%',
              },
            }}
          >
            <StructuredText
              //@ts-ignore
              data={data.pageContent}
              customRules={structuredTextRules({
                paragraphProps: {
                  size: 'm',
                },
              })}
              //@ts-expect-error
              renderBlock={structuredTextBlockRules}
            />
          </TextHolder>
          <BreakoutTextHolder
            css={{ mr: '16.67%', mt: '$6', overflow: 'hidden' }}
          >
            <Box css={{ position: 'relative', bottom: '-$3' }}>
              <Illustration />
            </Box>
          </BreakoutTextHolder>
        </Container>
        <ModularContent
          //@ts-ignore
          data={data.modularContent}
        />
      </Box>
    </Layout>
  )
}

export default ServicePage

export async function getStaticPaths() {
  //@ts-ignore
  const allServicePages: GetServicePagesQuery = await request({
    query: 'GetServicePages',
  })
  return {
    paths: allServicePages.allServices.map(({ pageSlug }) => ({
      params: {
        pageSlug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params, preview = false }) {
  const { service }: GetServicePageQuery = await request({
    query: 'GetServicePage',
    preview,
    variables: { pageSlug: params.pageSlug },
  })

  return {
    props: {
      data: { ...service },
      pageSlug: params.pageSlug,
    },
  }
}
