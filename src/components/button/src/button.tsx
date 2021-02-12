import { styled, ResetButton } from '@theme'

interface ButtonProps {
  onClick: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>
  ) => any
}

const ButtonBg = styled(ResetButton, {
  backgroundColor: '$blue',
  border: 'none',
  borderRadius: '$2',
  color: '$white',
  height: '$5',
  px: '$2',
  fontFamily: '$paragraph',
  fontWeight: 600,
})

export function Button({ onClick, ...props }: ButtonProps) {
  return <div />
}

export const NakedButton = styled(ResetButton, {
  display: 'flex',
  backgroundColor: 'transparent',
  border: 'none',
  color: '$DBA90',
  transition: 'color background-color 0.1s ease-in-out',
  '&:hover': {
    backgroundColor: '$BA10',
    color: '$DBA100',
  },
  px: '$2',
  py: '$2',
  br: '$3',
  fontSize: '$p3m',
  m: { fontSize: '$p3t', px: '$2', py: '$3', br: '$3' },
  l: { fontSize: '$p3d', px: '$3', py: '$3', br: '$4' },
})
