import { CSS, styled, Box } from '@theme'

interface MobileNavigationProps {
  navIsOpen: boolean
  data?: typeof staticData
  css?: CSS
  as?: any
  layout?: boolean
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
  size: '0',
  pointerEvents: 'none',
  opacity: 0,
  variants: {
    open: {
      true: { size: 'auto', pointerEvents: 'auto', opacity: 1 },
    },
  },
})

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  navIsOpen,
  data = staticData,
  ...props
}) => {
  return (
    <NavWrapper open={navIsOpen} {...props}>
      Hello from the nav
    </NavWrapper>
  )
}
