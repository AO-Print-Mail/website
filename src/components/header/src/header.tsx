import { Container, Logo, UI1, ContentWrapper, styled } from '@theme'
import Link from 'next/link'
import { NakedButton } from '../../button'
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
        <NakedButton as="a" href="tel:+61296456777">
          <Phone css={{ mx: '$1', m: { mx: '$2' } }} />
          <UI1 color="unset" css={{ mx: '$1', m: { mx: '$2' } }}>
            (02) 9645 6777
          </UI1>
        </NakedButton>
      </Container>
    </HeaderBar>
  )
}
