import {
  styled,
  Container,
  Heading1,
  Box,
  Paragraph3,
  HomePattern,
  Heading2,
} from '@theme'
import { Layout } from '@components/layout'
import { HomePageBody } from '@components/home-page-body'
import { GetHomePageQuery } from '@lib/datocms/__generated__/types'
import { request } from '@lib/datocms/datocms'
import { ThenArg } from '@utils/src'
import { StructuredText } from 'react-datocms'
import { structuredTextRules } from '@lib/datocms/structuredTextRules'

interface PageProps {
  data?: ThenArg<ReturnType<typeof getStaticProps>>['props']['data']
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

const ParagraphText = ({ data }) => {
  return (
    <StructuredText
      data={data}
      customRules={structuredTextRules({
        headingProps: { color: 'primary' },
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

const LandingPageContent: React.FC<PageProps> = ({ data }) => {
  const featureSections = data.contentSections.map((f) => (
    <Box key={f.heading}>
      <Heading2>{f.heading}</Heading2>
      <ParagraphText data={f.paragraph} />
    </Box>
  ))
  return (
    <Layout
      canonicalPath="https://www.aomail.com.au"
      //@ts-expect-error
      metaData={data._seoMetaTags}
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
            '@l': { display: 'flex', height: '800px', pt: '$5' },
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
            <Heading1 color="primary">{data.mainHeading}</Heading1>
            <Box css={{ maxWidth: '60ch', mt: '-$4' }}>
              <ParagraphText data={data.heroParagraph} />
            </Box>
          </HeroText>
        </Container>
      </Box>
      <Box>
        <HomePageBody
          cardData={data.cardData}
          featureSections={featureSections}
        />
      </Box>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const { homepage }: GetHomePageQuery = await request({
    query: 'GetHomePage',
    preview,
    variables: {},
  })
  /*
  const markdownToDast = (await import('@utils/src')).markdownToDast

  const { heroParagraph: hp, contentSections: cs } = homepage

  const heroParagraph = await markdownToDast(hp.value)
  const getContentSections = (data: typeof homepage.contentSections) => {
    const promises = data.map(async (d) => {
      return {
        ...d,
        paragraph: await markdownToDast(d.paragraph.value),
      }
    })
    return Promise.all(promises)
  }
  console.log(JSON.stringify(homepage.heroParagraph, null, 4))
  const contentSections = await getContentSections(homepage.contentSections)
*/
  const data = {
    ...homepage,
    cardData: homepage.serviceCards.map((card) => ({
      title: card.title,
      image: card.image.responsiveImage,
      description: card.description,
      link: '/#',
      linkText: card.linkText,
    })),
  }

  return {
    props: {
      data,
    },
  }
}

export default LandingPageContent
