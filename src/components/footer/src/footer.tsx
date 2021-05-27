import {
  styled,
  ContentWrapper,
  Container,
  Logo,
  Paragraph,
  Phone,
  CovidSafeBanner,
  css,
  CSS,
  Flex,
  Box,
  Facebook,
  LinkedIn,
} from '@theme'
import { Button, IconButton } from '@components/button'
import Link from 'next/link'

interface FooterProps {
  css?: CSS
  beforeFooter?: React.ReactNode
  footerCss?: CSS
  landing?: boolean
}

const FooterWrapper = styled(ContentWrapper, {
  flex: '0',
  variants: {
    style: {
      none: {},
      normal: {
        pt: '$5',
        backgroundColor: '$N90',
      },
    },
  },
  defaultVariants: {
    style: 'normal',
  },
})

const LayoutGrid = styled(Container, {
  '@m': {
    display: 'grid',
    gridGap: '$4',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
  },
  '@l': {
    gridGap: '$5',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
  },
})

const ContentColumn = styled('div', {
  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  '@m': {
    gridColumnStart: '1',
    gridColumnEnd: 'span 3',
  },
  '@l': {
    gridColumnEnd: 'span 2',
  },
})
const row3 = css({
  gridColumnStart: '1',
  gridColumnEnd: 'span 4',
  alignSelf: 'start',
  '@s': {
    gridColumnEnd: 'span 3',
  },
  '@m': {
    gridColumnStart: '4',
    gridColumnEnd: 'span 3',
  },
  '@l': {
    gridColumnStart: '6',
    gridColumnEnd: 'span 3',
  },
})

const staticData = [
  {
    section_label: 'Services',
    menu_items: [
      { name: 'Direct Mail', link: '/direct-mail' },
      { name: 'Fulfilment', link: '/package-fulfilment' },
      { name: 'Printing', link: '/printing' },
    ],
  },
  {
    section_label: 'Company',
    menu_items: [
      { name: 'About Us', link: '/about' },
      { name: 'Contact', link: '/contact' },
      { name: 'Blog', link: '/blog' },
    ],
  },
  {
    section_label: 'Legal',
    menu_items: [
      { name: 'Privacy policy', link: '/legal/privacy' },
      { name: 'Terms of service', link: '/legal/terms' },
    ],
  },
]

interface MainFooterProps {
  data?: typeof staticData
}

const Column = styled('section', {
  px: '$2',
  width: '50%',
  mb: '$3',
  '@m': { px: '$3', width: '33.3%' },
  '@l': { px: '$4', width: '16.6%' },
})

const SectionLabel = styled(Paragraph, {
  ml: '$2',
  color: '$LA60',
  fontWeight: '600',
})

const LinkText = styled(Paragraph, {
  color: '$N30',
  p: '$2',
  mt: '$1',
  '&:hover': {
    color: '$grey',
  },
})

const Section: React.FC<{ data: typeof staticData[0]['menu_items'] }> = ({
  data,
}) => {
  return (
    <Box css={{ mt: '$3' }}>
      {data.map((d) => (
        <Link href={d.link} key={d.name} prefetch={false}>
          <a style={{ textDecoration: 'none' }}>
            <LinkText size="xs">{d.name}</LinkText>
          </a>
        </Link>
      ))}
    </Box>
  )
}
export const MainFooter: React.FC<MainFooterProps> = ({
  data = staticData,
  ...props
}) => {
  return (
    <Box css={{ backgroundColor: '$N90' }}>
      <Container>
        <Flex
          as="nav"
          wrap
          css={{
            '@initial': { mx: '-$2', mb: '$4', position: 'relative' },
            '@m': { mx: '-$3' },
            '@l': { mx: '-$4' },
          }}
        >
          <Column
            css={{
              '@initial': { width: '100%', mb: '$2', ml: '$2' },
              '@l': { width: '16.6%', ml: '0', mt: '$2' },
            }}
          >
            <Link href="/">
              <a>
                <Logo
                  color="white"
                  size={{ '@initial': 'small', '@xl': 'regular' }}
                />
              </a>
            </Link>
          </Column>
          {data.map((section) => (
            <Column
              key={`${section.section_label}`}
              as="section"
              css={{ mt: '$4' }}
            >
              <SectionLabel size="s" as="h3">
                {section.section_label}
              </SectionLabel>
              <Section data={section.menu_items} />
            </Column>
          ))}
        </Flex>
      </Container>
      <Box css={{ backgroundColor: '$LA10', py: '$4' }}>
        <Container>
          <Flex
            css={{
              '@initial': {
                mx: '-$2',
                position: 'relative',
                flexDirection: 'column',
              },
              '@m': {
                flexFlow: 'row nowrap',
                justifyContent: 'space-between',
                mx: '-$3',
              },
              '@l': {
                mx: '-$4',
              },
            }}
          >
            <Column
              css={{
                '@initial': {
                  display: 'flex',
                  width: '100%',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                },
                '@m': {
                  width: '40%',
                },
                '@l': {
                  width: '33.33%',
                  ml: '8.33%',
                },
              }}
            >
              <Button
                as="a"
                href="https://g.page/ao-mail"
                color="light"
                style="naked"
                size="small"
                css={{ mt: '$3', color: '$LA60' }}
              >
                <Paragraph size="xs" color="light" css={{ my: 0 }}>
                  9 Clearview Pl
                  <br />
                  Brookvale NSW 2100
                </Paragraph>
              </Button>
              <Button
                as="a"
                href="tel:+61296456777"
                leftIcon={<Phone size="matchFontSize" />}
                color="light"
                style="naked"
                size="small"
                css={{ mt: '$2', color: '$LA60' }}
              >
                <Paragraph size="xs" color="light" css={{ my: 0 }}>
                  (02) 9645 6777
                </Paragraph>
              </Button>
              <Flex css={{ justifyContent: 'flex-start' }}>
                <IconButton
                  as="a"
                  href=""
                  color="light"
                  style="naked"
                  size="small"
                  css={{ mt: '$2', color: '$LA60' }}
                  label="Visit our Facebook page"
                >
                  <Facebook size="regular" />
                </IconButton>
                <IconButton
                  as="a"
                  href=""
                  color="light"
                  style="naked"
                  size="small"
                  css={{ mt: '$2', color: '$LA60' }}
                  label="Visit our LinkedIn page"
                >
                  <LinkedIn size="regular" />
                </IconButton>
              </Flex>
            </Column>
            <Column
              css={{
                '@initial': { width: '100% !important', mt: '$3' },
                '@m': { width: '50% !important' },
                '@l': { width: '33.3% !important', mr: '8.33%' },
              }}
            >
              <CovidSafeBanner css={{ m: '0', width: '100%' }} />
              <Paragraph
                size="xs"
                css={{ color: '$LA40', mt: '$3', '@m': { textAlign: 'right' } }}
              >
                &copy; ANO PTY Ltd. All rights reserved.
              </Paragraph>
            </Column>
          </Flex>
        </Container>
      </Box>
    </Box>
  )
}

export const Footer: React.FC<FooterProps> = ({
  beforeFooter,
  footerCss,
  landing,
  ...props
}: FooterProps) => {
  const landingFooter = (
    <>
      <LayoutGrid css={{ pb: '$5' }}>
        <ContentColumn>
          <Link href="/">
            <a>
              <Logo
                color="white"
                size={{
                  '@initial': 'regular',
                  '@m': 'large',
                  '@l': 'xlarge',
                }}
              />
            </a>
          </Link>
          <Button
            as="a"
            href="https://g.page/ao-mail"
            color="light"
            style="naked"
            size="small"
            offset="left"
            css={{ mt: '$3', color: '$LA60' }}
          >
            <Paragraph size="s" color="light" css={{ my: 0 }}>
              9 Clearview Pl
              <br />
              Brookvale NSW 2100
            </Paragraph>
          </Button>
          <Button
            as="a"
            href="tel:+61296456777"
            leftIcon={<Phone size="matchFontSize" />}
            color="light"
            style="naked"
            size="small"
            offset="left"
            css={{ mt: '$3', color: '$LA60' }}
          >
            (02) 9645 6777
          </Button>
        </ContentColumn>
        <ContentColumn className={row3()}>
          <CovidSafeBanner css={{ mt: '$2' }} />
          <Button
            as="a"
            href="#"
            color="light"
            style="naked"
            size="small"
            offset="left"
            css={{ display: 'flex', mt: '$4', color: '$LA60' }}
          >
            Privacy and Cookie Policies
          </Button>
          <Button
            as="a"
            href="#"
            color="light"
            style="naked"
            size="small"
            offset="left"
            css={{ display: 'flex', mt: '$1', color: '$LA60' }}
          >
            Terms of Service
          </Button>
        </ContentColumn>
      </LayoutGrid>
      <ContentWrapper css={{ backgroundColor: '$black' }}>
        <Container>
          <Paragraph
            size="xs"
            css={{ color: '$LA60', my: '$2', pb: `$1`, ...footerCss }}
          >
            &copy; ANO PTY Ltd. All rights reserved.
          </Paragraph>
        </Container>
      </ContentWrapper>
    </>
  )
  if (beforeFooter) {
    return (
      <FooterWrapper style="none" {...props}>
        {beforeFooter}
        <FooterWrapper as="footer">
          {landing ? landingFooter : <MainFooter />}
        </FooterWrapper>
      </FooterWrapper>
    )
  }
  return (
    <FooterWrapper as="footer" {...props}>
      {landing ? landingFooter : <MainFooter />}
    </FooterWrapper>
  )
}
