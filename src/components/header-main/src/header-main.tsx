import React from 'react'
import { styled, Container, Logo, Flex, Box } from '@theme'
import { m as motion } from 'framer-motion'
import { MenuButton } from '@components/button'
import Link from 'next/link'
import { MobileNavigation } from '@components/mobile-navigation'

interface HeaderMainProps {
  menuIsOpen: boolean
  toggleMenu: () => void
  show?: boolean
}

const HeaderOuter = styled('div', {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  zIndex: '$1',
  variants: {
    expanded: {
      true: {
        bottom: '0',
      },
    },
  },
})

const Header = styled('header', {
  backgroundColor: '$LA80',
  backdropFilter: 'blur(12px)',
  '-webkit-backdrop-filter': 'blur(12px)',
  boxShadow: '0px 6px 12px $colors$DBA15',
  py: '$3',
  height: '100%',
  when: {
    m: { pb: '$4' },
    moz: {
      backgroundColor: '$white',
    },
  },
})

const LogoBox = styled('a', {
  flex: '0 0',
})

const NavContainer = styled('div', {
  flex: '1 1',
  alignSelf: 'flex-end',
  ml: '$6',
  when: {
    xl: {
      ml: '$7',
    },
  },
})

const headerVariants = {
  hide: {
    y: '-100%',
  },
  show: {
    y: 0,
  },
}

const spring = {
  type: 'spring',
  stiffness: 800,
  damping: 100,
}

export const HeaderMain: React.FC<HeaderMainProps> = ({
  menuIsOpen,
  toggleMenu,
  show,
  ...props
}) => {
  return (
    <HeaderOuter
      as={motion.header}
      variants={headerVariants}
      animate={show ? 'show' : 'hide'}
      expanded={menuIsOpen}
      transition={spring}
      {...props}
    >
      <Header as={motion.nav} layout>
        <Container
          as={motion.div}
          layout
          css={{ display: 'flex' }}
          transition={spring}
        >
          <Link href="/">
            <LogoBox>
              <Logo
                color="primary"
                size={{
                  initial: 'regular',
                  l: 'large',
                }}
              />
            </LogoBox>
          </Link>
          <NavContainer>
            <Flex
              css={{
                justifyContent: 'flex-end',
                when: { l: { justifyContent: 'space-between' } },
              }}
            >
              <MenuButton
                open={menuIsOpen}
                aria-expanded={menuIsOpen}
                aria-controls="drawer-menu"
                onClick={(e) => {
                  e.preventDefault()
                  toggleMenu()
                }}
                css={{ when: { l: { display: 'none' } } }}
              />
            </Flex>
          </NavContainer>
        </Container>
        <Box as={motion.nav} css={{ when: { l: { display: 'none' } } }} layout>
          <MobileNavigation id="drawer-menu" navIsOpen={menuIsOpen} />
        </Box>
      </Header>
    </HeaderOuter>
  )
}
