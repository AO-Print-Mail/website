import { styled, ThemeProps, ThemeVariants } from '@theme'

export type ContentWrapperProps = ThemeProps<typeof ContentWrapper>
export type ContentWrapperVariants = ThemeVariants<typeof ContentWrapper>

export const ContentWrapper = styled('div', {
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'center',
  position: 'relative',
  flex: '1',
})
