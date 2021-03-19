import { styled, ContentWrapper } from '..'

export const HeaderBar = styled(ContentWrapper, {
  position: 'relative',
  width: '100%',
  flex: '0',
  backgroundColor: '$white',
  py: '$3',
  borderBottomWidth: '$thin',
  borderBottomColor: '$N30',
  borderBottomStyle: 'solid',
  zIndex: '$3',
  variants: {
    blur: {
      true: {
        left: '0',
        right: '0',
        position: 'absolute',
        backgroundColor: '$LA80',
        backdropFilter: 'blur(12px)',
        boxShadow: '0px 6px 12px $colors$DBA15',
        when: {
          moz: {
            backgroundColor: '$white',
          },
        },
      },
    },
  },
})
