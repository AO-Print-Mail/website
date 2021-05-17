import React, { forwardRef, useState, useContext } from 'react'
import { AnimatePresence, m as motion, useCycle } from 'framer-motion'
import { Button, MenuButton } from '@components/button'
import Link from 'next/link'
import { MobileNavigation } from '@components/mobile-navigation'
import { DesktopNavigation } from '@components/desktop-navigation'
import { Modal } from '@components/modal'
import { styled } from '@theme/stitches.config'
import { Box, Container, Flex, Logo } from '@theme/atoms'
import { LayoutScrollContext } from '@components/layout/src/layoutScrollContext'
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
        display: 'flex',
        flexDirection: 'column',
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
  '@l': { pb: '$4' },
  moz: {
    backgroundColor: '$white',
  },
})

const NavContainer = styled('div', {
  flex: '1 1',
  alignSelf: 'flex-end',
  ml: '$3',
  '@xl': {
    ml: '$6',
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
    const [modalIsOpen, toggleModalIsOpen] = useCycle(false, true)

    function toggleMenu() {
      toggleScrollLock()
      setMenuIsOpen(!menuIsOpen)
    }

    async function toggleQuoteModal(e: React.MouseEvent) {
      e.preventDefault()
      toggleModalIsOpen()
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
                  '@l': {
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    fontSize: '$p4d',
                  },
                }}
              >
                <DesktopNavigation
                  css={{ display: 'none', mt: '$4', '@l': { display: 'flex' } }}
                />

                <Button
                  css={{ display: 'none', '@m': { display: 'inline-flex' } }}
                  onClick={toggleQuoteModal}
                >
                  Get a quote
                </Button>
                <AnimatePresence>
                  {modalIsOpen && <Modal toggle={toggleQuoteModal}></Modal>}
                </AnimatePresence>

                <MenuButton
                  open={menuIsOpen}
                  aria-expanded={menuIsOpen}
                  aria-controls="drawer-menu"
                  onClick={(e) => {
                    e.preventDefault()
                    toggleMenu()
                  }}
                  css={{ py: '$2', ml: '$3', '@l': { display: 'none' } }}
                />
              </Flex>
            </NavContainer>
          </Container>
          <Box as={motion.div} css={{ '@l': { display: 'none' } }} layout>
            <MobileNavigation id="drawer-menu" navIsOpen={menuIsOpen} />
          </Box>
        </Header>
      </HeaderOuter>
    )
  }
)
