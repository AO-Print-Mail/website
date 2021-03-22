import React from 'react'
import Link from 'next/link'
import { CSS, styled, Box, Container, UI2, Flex } from '@theme'
import { Button } from '@components/button'
import { motion } from 'framer-motion'
interface MobileNavigationProps {
  navIsOpen: boolean
  data?: typeof staticData
  css?: CSS
  as?: any
  layout?: boolean
  id?: string
}

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

const NavWrapper = styled('div', {
  pointerEvents: 'none',
  opacity: 0,
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  overflow: 'hidden',
  position: 'absolute',
  whiteSpace: 'nowrap',
  variants: {
    open: {
      true: {
        clip: 'none',
        clipPath: 'none',
        overflow: 'auto',
        position: 'relative',
        whiteSpace: 'auto',
        size: 'auto',
        pointerEvents: 'auto',
        opacity: 1,
        mt: '$4',
      },
    },
  },
})

interface NavSectionProps {
  section_label: string
  menu_items: typeof staticData[0]['menu_items']
}

const SectionLabel = styled(UI2, {
  color: '$DA40',
  fontWeight: 'semi-bold',
  ml: '$2',
})

const SectionLink: React.FC<typeof staticData[0]['menu_items'][0]> = ({
  name,
  link,
}) => {
  return (
    <Box as="li" css={{ flex: '0 0 50%' }}>
      <Link href={link}>
        <Button
          style="naked"
          as="a"
          css={{ display: 'inline-block', mt: '$3' }}
        >
          <UI2 color="unset">{name}</UI2>
        </Button>
      </Link>
    </Box>
  )
}

const NavSection: React.FC<NavSectionProps> = ({
  section_label,
  menu_items,
}) => {
  return (
    <Box css={{ borderTop: '1px dashed $colors$DBA30', pt: '$5', pb: '$4' }}>
      <Container as="section">
        <SectionLabel as="h3">{section_label}</SectionLabel>
        <Flex
          as="ul"
          css={{
            listStyle: 'none',
            padding: '0',
            margin: '0',
            mt: '$2',
            when: { m: { width: '75%' } },
          }}
          wrap
        >
          {menu_items.map((item) => (
            <SectionLink {...item} />
          ))}
        </Flex>
      </Container>
    </Box>
  )
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  navIsOpen,
  data = staticData,
  ...props
}) => {
  return (
    <NavWrapper open={navIsOpen} {...props}>
      {data.map((section) => (
        <NavSection
          key={section.section_label}
          section_label={section.section_label}
          menu_items={section.menu_items}
        />
      ))}
    </NavWrapper>
  )
}
