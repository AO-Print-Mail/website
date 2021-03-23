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
} from '@theme'
import { Button } from '@components/button'
import Link from 'next/link'
import React from 'react'

interface FooterProps {
  css?: CSS
  beforeFooter?: React.ReactNode
  footerCss?: CSS
}

const FooterWrapper = styled(ContentWrapper, {
  flex: '0',
  variants: {
    style: {
      none: {},
      normal: {
        pt: '$5',
        backgroundColor: '$N80',
      },
    },
  },
  defaultVariants: {
    style: 'normal',
  },
})

const LayoutGrid = styled(Container, {
  when: {
    m: {
      display: 'grid',
      gridGap: '$4',
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
    },
    l: {
      gridGap: '$5',
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
    },
  },
})

const ContentColumn = styled('div', {
  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  when: {
    m: {
      gridColumnStart: '1',
      gridColumnEnd: 'span 3',
    },
    l: {
      gridColumnEnd: 'span 2',
    },
  },
})
const row3 = css({
  gridColumnStart: '1',
  gridColumnEnd: 'span 4',
  alignSelf: 'start',
  when: {
    s: {
      gridColumnEnd: 'span 3',
    },
    m: {
      gridColumnStart: '4',
      gridColumnEnd: 'span 3',
    },
    l: {
      gridColumnStart: '6',
      gridColumnEnd: 'span 3',
    },
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
]

interface MainFooterProps {
  data?: typeof staticData
}

const MainFooter: React.FC<MainFooterProps> = ({
  data = staticData,
  ...props
}) => {
  return (
    <Container>
      <Flex as="nav"></Flex>
    </Container>
  )
}

export const Footer: React.FC<FooterProps> = ({
  beforeFooter,
  footerCss,
  ...props
}: FooterProps) => {
  const footerContent = (
    <>
      <LayoutGrid css={{ pb: '$5' }}>
        <ContentColumn>
          <Link href="/">
            <a>
              <Logo
                color="white"
                size={{
                  initial: 'regular',
                  m: 'large',
                  l: 'xlarge',
                }}
              />
            </a>
          </Link>
          <Paragraph4 color="light">
            9 Clearview Pl
            <br />
            Brookvale NSW 2100
          </Paragraph4>
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
        <FooterWrapper as="footer">{footerContent}</FooterWrapper>
      </FooterWrapper>
    )
  }
  return (
    <FooterWrapper as="footer" {...props}>
      {footerContent}
    </FooterWrapper>
  )
}
