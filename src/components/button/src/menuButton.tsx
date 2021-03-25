import { m as motion } from 'framer-motion'
import React from 'react'
import { Button } from './button'
import { UI3, styled, CSS } from '@theme'

interface MenuButtonProps {
  open: boolean
  onClick?: (e: React.MouseEvent) => void
  css?: CSS
}

const pathVariants = {
  visible: {
    y: 0,
    opacity: 1,
  },
  hidden: {
    y: 5,
    opacity: 0,
  },
}

const Path = ({ d, ...props }: { d: string }) => (
  <motion.path
    fill="currentColor"
    variants={pathVariants}
    exit="hidden"
    animate="visible"
    d={d}
    {...props}
  />
)
const Svg = styled(motion.svg, {
  size: '$2',
})

const MenuButtonIcon: React.FC<MenuButtonProps> = ({ open }) => {
  const menu = [
    <Path key="menubar1" d="M3 18h18v-2H3v2z" />,
    <Path key="menubar2" d="M3 13h18v-2H3v2z" />,
    <Path key="menubar3" d="M3 6v2h18V6H3z" />,
  ]
  const close = (
    <Path d="M19 6.4L17.6 5 12 10.6 6.4 5 5 6.4l5.6 5.6L5 17.6 6.4 19l5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6L19 6.4z" />
  )

  return (
    <Svg transition={{ staggerChildren: 0.2 }} viewBox="0 0 24 24">
      {open ? close : menu}
    </Svg>
  )
}

const MenuButtonLabel: React.FC<MenuButtonProps> = ({ open }) => {
  return <UI3>{open ? 'Close' : 'Menu'}</UI3>
}

export const MenuButton: React.FC<MenuButtonProps> = ({
  open,
  onClick,
  ...props
}) => {
  return (
    <Button
      style="naked"
      //@ts-expect-error
      css={{ color: '$DBA85' }}
      rightIcon={<MenuButtonIcon open={open} />}
      onClick={onClick}
      {...props}
    >
      <UI3 color="unset">{open ? 'Close' : 'Menu'}</UI3>
    </Button>
  )
}
