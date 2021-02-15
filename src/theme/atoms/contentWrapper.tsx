import { styled, ThemeProps, ThemeVariants } from '@theme'

export type ContentWrapperProps = ThemeProps<typeof ContentWrapper>
export type ContentWrapperVariants = ThemeVariants<typeof ContentWrapper>

export const ContentWrapper = styled('div', {
  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'center',
  position: 'relative',
  flex: '1',
  width: '100%',
})
