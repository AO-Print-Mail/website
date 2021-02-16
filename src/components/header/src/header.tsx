import { Container, Logo, UI1, ContentWrapper, styled } from '@theme'
import Link from 'next/link'
import { Button } from '../../button'
import { Phone } from '@theme/icons/phone'

interface HeaderProps {
  sticky?: boolean
}

export const HeaderBar = styled(ContentWrapper, {
  flex: '0',
  backgroundColor: '$white',
  py: '$3',
  borderBottomWidth: '$thin',
  borderBottomColor: '$N30',
  borderBottomStyle: 'solid',
  l: {
    py: '$4',
  },
})

export function Header({ sticky = false, ...props }: HeaderProps) {
  return (
    <HeaderBar {...props} as="header">
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
              color="primary"
              size={{
                initial: 'regular',
                m: 'large',
                l: 'xlarge',
              }}
            />
          </a>
        </Link>
        <Button
          as="a"
          href="tel:+61296456777"
          leftIcon={<Phone size="1em" />}
          color="primary"
          style="naked"
        >
          (02) 9645 6777
        </Button>
      </Container>
    </HeaderBar>
  )
}
