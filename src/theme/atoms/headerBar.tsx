import { styled, ThemeProps, ThemeVariants } from '..'

export type HeaderBarProps = ThemeProps<typeof HeaderBar>
export type HeaderBarVariants = ThemeVariants<typeof HeaderBar>

export const HeaderBar = styled('div', {
  backgroundColor: '$white',
  py: '$3',
  width: '100%',
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'center',
  borderBottomWidth: '$thin',
  borderBottomColor: '$N30',
  borderBottomStyle: 'solid',
  position: 'relative',
  l: {
    py: '$4',
  },
})
