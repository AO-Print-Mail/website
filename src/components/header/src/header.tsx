import { HeaderBar, Container, Logo } from '@theme'
import Link from 'next/link'

interface HeaderProps {
  sticky?: boolean
}

export function Header({ sticky = false, ...props }: HeaderProps) {
  return (
    <HeaderBar {...props} as="header">
      <Container>
        <Link href="/">
          <a>
            <Logo
              color="primary"
              size={{
                initial: 'regular',
                l: 'large',
              }}
            />
          </a>
        </Link>
      </Container>
    </HeaderBar>
  )
}
