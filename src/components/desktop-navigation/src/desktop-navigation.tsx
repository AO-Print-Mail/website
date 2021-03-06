import { Box, styled, CSS, Paragraph } from '@theme'
import Link from 'next/link'
import React from 'react'

interface DesktopNavigationProps
  extends React.ComponentProps<typeof MenuWrapper> {}

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
      { name: 'About Us', link: '/about' },
      { name: 'Contact', link: '/contact' },
      { name: 'Blog', link: '/blog' },
    ],
  },
]

const NavLinkText = styled(Paragraph, {
  cursor: 'pointer',
  color: '$B80',
  lineHeight: '24px',
  textDecoration: 'none',
  '&:hover': {
    color: '$DBA60',
  },
})

const NavLink: React.FC<{ name: string; link: string }> = ({
  name,
  link,
  ...props
}) => {
  return (
    <Box
      {...props}
      css={{
        mr: '$4',
        '& > a': { textDecoration: 'none' },
        '@xl': { mr: '$5' },
      }}
      as="li"
    >
      <Link href={link} passHref>
        <NavLinkText as="a">{name}</NavLinkText>
      </Link>
    </Box>
  )
}

const MenuWrapper = styled('nav', {
  display: 'flex',
  mx: '0',
  my: '$2',
  listStyle: 'none',
})

export const DesktopNavigation: React.FC<DesktopNavigationProps> = ({
  ...props
}) => {
  //const [services, ...rest] = staticData
  const menuItems = staticData.reduce((acc, i) => [...acc, ...i.menu_items], [])
  return (
    <MenuWrapper as="ul" {...props}>
      {[
        menuItems.map((service) => (
          <NavLink key={`service-${service.name}`} {...service} />
        )),
      ]}
    </MenuWrapper>
  )
}
