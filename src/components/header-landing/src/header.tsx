import { Container, Logo, HeaderBar, styled } from '@theme'
import Link from 'next/link'
import { Button } from '../../button'
import { Phone } from '@theme/icons/phone'

interface HeaderProps {
  sticky?: boolean
  blur?: boolean
}

const NavContainer = styled('div', {})

export function Header({ sticky = false, ...props }: HeaderProps) {
  return (
    <HeaderBar as="header" {...props}>
      <Container
        css={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}
      >
        <Link href="/">
          <a>
            <Logo
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
          href="tel:+61296456777"
          leftIcon={<Phone size="matchFontSize" />}
          style="naked"
        >
          (02) 9645 6777
        </Button>
      </Container>
    </HeaderBar>
  )
}
