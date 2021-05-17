import { styled } from '@theme/stitches.config'
import { ContentWrapper } from './contentWrapper'

export const HeaderBar = styled(ContentWrapper, {
  position: 'relative',
  width: '100%',
  flex: '0',
  backgroundColor: '$white',
  py: '$3',
  borderBottomWidth: '$thin',
  borderBottomColor: '$N30',
  borderBottomStyle: 'solid',
})
