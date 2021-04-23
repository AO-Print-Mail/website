import React, { forwardRef, useState, useContext } from 'react'
import { styled, Container, Logo, Flex, Box } from '@theme'
import { m as motion } from 'framer-motion'
import { Button, MenuButton } from '@components/button'
import Link from 'next/link'
import { MobileNavigation } from '@components/mobile-navigation'
import { DesktopNavigation } from '@components/desktop-navigation'
import { LayoutScrollContext } from '@components/layout'
interface HeaderMainProps {
  show?: boolean
}

const HeaderOuter = styled('div', {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  zIndex: '$3',
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
  '@m': { pb: '$4' },
  moz: {
    backgroundColor: '$white',
  },
})

const NavContainer = styled('div', {
  flex: '1 1',
  alignSelf: 'flex-end',
  ml: '$6',
  '@xl': {
    ml: '$7',
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

export const HeaderMain = forwardRef<HTMLDivElement, HeaderMainProps>(
  ({ show, ...props }, ref) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const { toggleScrollLock } = useContext(LayoutScrollContext)

    function toggleMenu() {
      toggleScrollLock()
      setMenuIsOpen(!menuIsOpen)
    }

    return (
      <HeaderOuter
        as={motion.header}
        variants={headerVariants}
        animate={show ? 'show' : 'hide'}
        expanded={menuIsOpen}
        transition={spring}
        ref={ref}
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
              <a style={{ flex: '0 0' }}>
                <Logo
                  color="primary"
                  size={{
                    '@initial': 'regular',
                    '@l': 'large',
                  }}
                />
              </a>
            </Link>
            <NavContainer>
              <Flex
                css={{
                  justifyContent: 'flex-end',
                  '@l': { justifyContent: 'space-between' },
                }}
              >
                <DesktopNavigation
                  css={{ display: 'none', '@l': { display: 'flex' } }}
                />
                <Button>Get a quote</Button>
                <MenuButton
                  open={menuIsOpen}
                  aria-expanded={menuIsOpen}
                  aria-controls="drawer-menu"
                  onClick={(e) => {
                    e.preventDefault()
                    toggleMenu()
                  }}
                  css={{ py: '$2', '@l': { display: 'none' } }}
                />
              </Flex>
            </NavContainer>
          </Container>
          <Box as={motion.nav} css={{ '@l': { display: 'none' } }} layout>
            <MobileNavigation id="drawer-menu" navIsOpen={menuIsOpen} />
          </Box>
        </Header>
      </HeaderOuter>
    )
  }
)
