import {
  styled,
  ContentWrapper,
  Container,
  Logo,
  UI1,
  Paragraph4,
  Paragraph5,
} from '@theme'
import { Phone } from '@theme/icons/phone'
import { NakedButton } from '@components/button'
import Link from 'next/link'

interface FooterProps {}

const FooterContainer = styled(ContentWrapper, {
  backgroundColor: '$N80',
  flex: '0',
  pt: '$5',
})

export function Footer(props: FooterProps) {
  return (
    <FooterContainer as="footer">
      <Container css={{ pb: '$5' }}>
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
        <NakedButton
          as="a"
          href="tel:+61296456777"
          css={{ ml: '-1.5rem', color: '$LA60' }}
        >
          <Phone css={{ mx: '$1', m: { mx: '$2' } }} />
          <UI1 color="unset" css={{ mx: '$1', m: { mx: '$2' } }}>
            (02) 9645 6777
          </UI1>
        </NakedButton>
      </Container>
      <ContentWrapper css={{ backgroundColor: '$black' }}>
        <Container>
          <Paragraph5 css={{ color: '$LA40', my: '$2' }}>
            &copy; ANO PTY Ltd. All rights reserved.
          </Paragraph5>
        </Container>
      </ContentWrapper>
    </FooterContainer>
  )
}
