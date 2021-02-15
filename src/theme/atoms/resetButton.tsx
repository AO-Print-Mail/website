import { styled, ThemeVariants } from '..'

export type ResetButtonVariants = ThemeVariants<typeof ResetButton>

export const ResetButton = styled('button', {
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
  transition: 'color background-color 0.1s ease-in-out',
  willChange: 'color',
  cursor: 'pointer',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  '::before': {
    boxSizing: 'border-box',
  },
  '::after': {
    boxSizing: 'border-box',
  },
})
