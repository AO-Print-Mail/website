import {
  styled,
  ContentWrapper,
  Container,
  Logo,
  Paragraph4,
  Paragraph5,
  Phone,
  CovidSafeBanner,
  css,
  CSS,
  Flex,
  Box,
  UI2,
  UI3,
} from '@theme'
import { Button } from '@components/button'
import Link from 'next/link'
import React from 'react'

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
      { name: 'About Us', link: '/about-us' },
      { name: 'Contact', link: '/contact' },
      { name: 'Blog', link: '/blog' },
    ],
  },
  {
    section_label: 'Legal',
    menu_items: [
      { name: 'Privacy policy', link: '/privacy' },
      { name: 'Cookie policy', link: '/cookies' },
      { name: 'Terms of service', link: '/terms' },
    ],
  },
]

interface MainFooterProps {
  data?: typeof staticData
}

const Column = styled('section', {
  px: '$2',
  width: '16.6%',
  '@m': { px: '$3' },
  '@l': { px: '$4' },
})

const SectionLabel = styled(UI3, {
  ml: '$2',
  color: '$LA35',
  fontWeight: '600',
})

const LinkText = styled(Paragraph5, {
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
        <Link href={d.link} key={d.name}>
          <a style={{ textDecoration: 'none' }}>
            <LinkText>{d.name}</LinkText>
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
    <Box css={{ backgroundColor: '$N90', mb: '$4' }}>
      <Container>
        <Flex
          as="nav"
          css={{
            position: 'relative',
            '@initial': { mx: '-$2' },
            '@m': { mx: '-$3' },
            '@l': { mx: '-$4' },
          }}
        >
          <Column>
            <Link href="/">
              <a>
                <Logo color="white" size={'regular'} />
              </a>
            </Link>
          </Column>
          {data.map((section) => (
            <Column as="section" css={{ mt: '$4' }}>
              <SectionLabel as="h3" key={section.section_label}>
                {section.section_label}
              </SectionLabel>
              <Section
                key={`${section.section_label}`}
                data={section.menu_items}
              />
            </Column>
          ))}
        </Flex>
      </Container>
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
            <Paragraph4 color="light" css={{ my: 0 }}>
              9 Clearview Pl
              <br />
              Brookvale NSW 2100
            </Paragraph4>
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
          <Paragraph5
            css={{ color: '$LA40', my: '$2', pb: `$1`, ...footerCss }}
          >
            &copy; ANO PTY Ltd. All rights reserved.
          </Paragraph5>
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
