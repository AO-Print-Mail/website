import { ThenArg } from '@utils/src'
import { styled, Container, Heading1, Box, HomePattern, Heading2 } from '@theme'
import { Layout } from '@components/layout'
import { GetAboutUsQuery } from '@lib/datocms/__generated__/types'
import { request } from '@lib/datocms/datocms'
import { StructuredText } from 'react-datocms'
import { structuredTextRules } from '@lib/datocms/structuredTextRules'
import {
  structuredTextBlockRules,
  ModularContent,
} from '@lib/datocms/blockRules'
import { ClientLogoBanner } from '@components/client-logo-banner'

interface PageProps {
  data?: ThenArg<ReturnType<typeof getStaticProps>>['props']['data']
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
        headingProps: { color: 'primary', css: { ml: '8.335%' } },
        paragraphProps: { size, color: 'primary' },
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

const AboutUsPage: React.FC<PageProps> = ({ data }) => {
  return (
    <Layout
      canonicalPath="about"
      //@ts-ignore
      metaData={data._seoMetaTags}
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
            pt: '$6',
            '@m': { height: '680px' },
            '@l': { display: 'flex', height: '768px', pt: '$5' },
          }}
        >
          <HeroText>
            <Heading1 color="primary">{data.mainHeading}</Heading1>
            <Box css={{ maxWidth: '60ch', mt: '-$4' }}>
              <ConfiguredText data={data.heroParagraph} size="Paragraph2" />
            </Box>
          </HeroText>
        </Container>
      </Box>
      <Container>
        <ConfiguredText data={data.pageContent} size="Paragraph2" />
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const { aboutUsPage }: GetAboutUsQuery = await request({
    query: 'GetAboutUs',
    preview,
    variables: {},
  })
  const data = {
    ...aboutUsPage,
  }

  return {
    props: {
      data,
    },
  }
}

export default AboutUsPage