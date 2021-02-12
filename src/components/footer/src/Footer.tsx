import { styled, ContentWrapper, Container, Logo } from '@theme'
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
        This is the container
      </Container>
    </FooterContainer>
  )
}
