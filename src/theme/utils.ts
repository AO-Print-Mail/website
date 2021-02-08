import { tokens as theme } from './tokens'

const gradients = {
  $orange: '90deg, #EE3131 0%, #F89E33 100.02%',
  $lightBlue: '272.88deg, #B6DDF6 14.59%, #0072CE 101%',
  $primaryBlue: '272.88deg, #0072CE 14.59%, #00237D 101%',
  $green: '90deg, #4F4F5E 0%, #84BA73 100.02%',
  $white: '90deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.93) 100%',
  $dark: '90deg, rgba(36, 35, 52, 0.93) 0%, rgba(36, 35, 52, 0.02) 100%',
}

type gradientColor = '' | '$green' | 'orange' | '$white' | '$dark'

export default {
  p: (value: any) => ({
    paddingTop: value,
    paddingBottom: value,
    paddingLeft: value,
    paddingRight: value,
  }),
  pt: (value: any) => ({
    paddingTop: value,
  }),
  pr: (value: any) => ({
    paddingRight: value,
  }),
  pb: (value: any) => ({
    paddingBottom: value,
  }),
  pl: (value: any) => ({
    paddingLeft: value,
  }),
  px: (value: any) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value: any) => ({
    paddingTop: value,
    paddingBottom: value,
  }),

  m: (value: any) => ({
    marginTop: value,
    marginBottom: value,
    marginLeft: value,
    marginRight: value,
  }),
  mt: (value: any) => ({
    marginTop: value,
  }),
  mr: (value: any) => ({
    marginRight: value,
  }),
  mb: (value: any) => ({
    marginBottom: value,
  }),
  ml: (value: any) => ({
    marginLeft: value,
  }),
  mx: (value: any) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (value: any) => ({
    marginTop: value,
    marginBottom: value,
  }),

  ta: (value: any) => ({ textAlign: value }),

  fd: (value: any) => ({ flexDirection: value }),
  fw: (value: any) => ({ flexWrap: value }),

  ai: (value: any) => ({ alignItems: value }),
  ac: (value: any) => ({ alignContent: value }),
  jc: (value: any) => ({ justifyContent: value }),
  as: (value: any) => ({ alignSelf: value }),
  fg: (value: any) => ({ flexGrow: value }),
  fs: (value: any) => ({ flexShrink: value }),
  fb: (value: any) => ({ flexBasis: value }),

  bc: (value: keyof typeof theme['colors'] | (string & {})) => ({
    backgroundColor: value,
  }),

  br: (value: keyof typeof theme['radii'] | (string & {})) => ({
    borderRadius: value,
  }),
  btrr: (value: keyof typeof theme['radii'] | (string & {})) => ({
    borderTopRightRadius: value,
  }),
  bbrr: (value: keyof typeof theme['radii'] | (string & {})) => ({
    borderBottomRightRadius: value,
  }),
  bblr: (value: keyof typeof theme['radii'] | (string & {})) => ({
    borderBottomLeftRadius: value,
  }),
  btlr: (value: keyof typeof theme['radii'] | (string & {})) => ({
    borderTopLeftRadius: value,
  }),

  bs: (value: any) => ({ boxShadow: value }),

  lh: (value: any) => ({ lineHeight: value }),

  ox: (value: any) => ({ overflowX: value }),
  oy: (value: any) => ({ overflowY: value }),

  pe: (value: any) => ({ pointerEvents: value }),
  us: (value: any) => ({ userSelect: value }),

  // size: (value: keyof typeof theme['sizes'] | (string & {})) => ({
  //   width: value,
  //   height: value,
  // }),

  linearGradient: (value: keyof typeof gradients | string) => {
    return { backgroundImage: `linear-gradient(${value})` }
  },

  flexGap: {
    '--gap': '12px',
    display: 'inline-flex',
    flexWrap: 'wrap',
    margin: 'calc(-1 * var(--gap)) 0 0 calc(-1 * var(--gap))',
    width: 'calc(100% + var(--gap))',
    '& > *': {
      margin: 'var(--gap) 0 0 var(--gap)',
    },
  },
}
