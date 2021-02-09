import { styled } from '@theme'

interface ButtonProps {
  onClick: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>
  ) => any
}

const ButtonBg = styled('button', {
  // Reset
  alignItems: 'center',
  appearance: 'none',
  boxSizing: 'border-box',
  display: 'inline-flex',
  justifyContent: 'center',
  lineHeight: '1',
  margin: '0',
  outline: 'none',
  padding: '0',
  textDecoration: 'none',
  userSelect: 'none',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  '::before': {
    boxSizing: 'border-box',
  },
  '::after': {
    boxSizing: 'border-box',
  },
  // Custom
  backgroundColor: '$blue',
  border: 'none',
  borderRadius: '$2',
  color: '$white',
  height: '$5',
  px: '$2',
  fontFamily: '$paragraph',
  fontSize: '$2',
  fontWeight: 600,
})

export function Button({ onClick, ...props }: ButtonProps) {
  return <div />
}
