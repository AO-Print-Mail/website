import { theme, stitchesConfig } from '.'

const gradients = {
  $orange: '90deg, #EE3131 0%, #F89E33 100.02%',
  $lightBlue: '272.88deg, #B6DDF6 14.59%, #0072CE 101%',
  $primaryBlue: '272.88deg, #0072CE 14.59%, #00237D 101%',
  $green: '90deg, #4F4F5E 0%, #84BA73 100.02%',
  $white: '90deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.93) 100%',
  $dark: '90deg, rgba(36, 35, 52, 0.93) 0%, rgba(36, 35, 52, 0.02) 100%',
}

export default {
  p: (config: typeof stitchesConfig) => (
    value: keyof typeof theme['space'] | (string & {})
  ) => ({
    paddingTop: value,
    paddingBottom: value,
    paddingLeft: value,
    paddingRight: value,
  }),
  pt: (config: typeof stitchesConfig) => (
    value: keyof typeof theme['space'] | (string & {})
  ) => ({
    paddingTop: value,
  }),
  pr: (config: typeof stitchesConfig) => (
    value: keyof typeof theme['space'] | (string & {})
  ) => ({
    paddingRight: value,
  }),
  pb: (config: typeof stitchesConfig) => (
    value: keyof typeof theme['space'] | (string & {})
  ) => ({
    paddingBottom: value,
  }),
  pl: (config: typeof stitchesConfig) => (
    value: keyof typeof theme['space'] | (string & {})
  ) => ({
    paddingLeft: value,
  }),
  px: (config: typeof stitchesConfig) => (
    value: keyof typeof theme['space'] | (string & {})
  ) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (config: typeof stitchesConfig) => (
    value: keyof typeof theme['space'] | (string & {})
  ) => ({
    paddingTop: value,
    paddingBottom: value,
  }),

  m: (config: typeof stitchesConfig) => (
    value: keyof typeof theme['space'] | (string & {})
  ) => ({
    marginTop: value,
    marginBottom: value,
    marginLeft: value,
    marginRight: value,
  }),
  mt: (config: typeof stitchesConfig) => (
    value: keyof typeof theme['space'] | (string & {})
  ) => ({
    marginTop: value,
  }),
  mr: (config: typeof stitchesConfig) => (
    value: keyof typeof theme['space'] | (string & {})
  ) => ({
    marginRight: value,
  }),
  mb: (config: typeof stitchesConfig) => (
    value: keyof typeof theme['space'] | (string & {})
  ) => ({
    marginBottom: value,
  }),
  ml: (config: typeof stitchesConfig) => (
    value: keyof typeof theme['space'] | (string & {})
  ) => ({
    marginLeft: value,
  }),
  mx: (config: typeof stitchesConfig) => (
    value: keyof typeof theme['space'] | (string & {})
  ) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (config: typeof stitchesConfig) => (
    value: keyof typeof theme['space'] | (string & {})
  ) => ({
    marginTop: value,
    marginBottom: value,
  }),

  ta: (config: typeof stitchesConfig) => (
    value: keyof typeof theme['space'] | (string & {})
  ) => ({
    textAlign: value,
  }),

  fd: (config: typeof stitchesConfig) => (
    value: keyof typeof theme['space'] | (string & {})
  ) => ({
    flexDirection: value,
  }),
  fw: (config: typeof stitchesConfig) => (
    value: keyof typeof theme['space'] | (string & {})
  ) => ({
    flexWrap: value,
  }),

  ai: (config: typeof stitchesConfig) => (
    value: keyof typeof theme['space'] | (string & {})
  ) => ({
    alignItems: value,
  }),
  ac: (config: typeof stitchesConfig) => (
    value: keyof typeof theme['space'] | (string & {})
  ) => ({
    alignContent: value,
  }),
  jc: (config: typeof stitchesConfig) => (
    value: keyof typeof theme['space'] | (string & {})
  ) => ({
    justifyContent: value,
  }),
  as: (config: typeof stitchesConfig) => (
    value: keyof typeof theme['space'] | (string & {})
  ) => ({
    alignSelf: value,
  }),
  fg: (config: typeof stitchesConfig) => (
    value: keyof typeof theme['space'] | (string & {})
  ) => ({
    flexGrow: value,
  }),
  fs: (config: typeof stitchesConfig) => (
    value: keyof typeof theme['space'] | (string & {})
  ) => ({
    flexShrink: value,
  }),
  fb: (config: typeof stitchesConfig) => (
    value: keyof typeof theme['space'] | (string & {})
  ) => ({
    flexBasis: value,
  }),

  bc: (config: typeof stitchesConfig) => (
    value: keyof typeof theme['colors'] | (string & {})
  ) => ({
    backgroundColor: value,
  }),

  br: (config: typeof stitchesConfig) => (
    value: keyof typeof theme['radii'] | (string & {})
  ) => ({
    borderRadius: value,
  }),
  btrr: (config: typeof stitchesConfig) => (
    value: keyof typeof theme['radii'] | (string & {})
  ) => ({
    borderTopRightRadius: value,
  }),
  bbrr: (config: typeof stitchesConfig) => (
    value: keyof typeof theme['radii'] | (string & {})
  ) => ({
    borderBottomRightRadius: value,
  }),
  bblr: (config: typeof stitchesConfig) => (
    value: keyof typeof theme['radii'] | (string & {})
  ) => ({
    borderBottomLeftRadius: value,
  }),
  btlr: (config: typeof stitchesConfig) => (
    value: keyof typeof theme['radii'] | (string & {})
  ) => ({
    borderTopLeftRadius: value,
  }),

  bs: (config: typeof stitchesConfig) => (value: any) => ({ boxShadow: value }),

  lh: (config: typeof stitchesConfig) => (value: any) => ({
    lineHeight: value,
  }),

  ox: (config: typeof stitchesConfig) => (value: any) => ({ overflowX: value }),
  oy: (config: typeof stitchesConfig) => (value: any) => ({ overflowY: value }),

  pe: (config: typeof stitchesConfig) => (value: any) => ({
    pointerEvents: value,
  }),
  us: (config: typeof stitchesConfig) => (value: any) => ({
    userSelect: value,
  }),
  size: (config: typeof stitchesConfig) => (value: any) => ({
    height: value,
    width: value,
  }),

  linearGradient: (config: typeof stitchesConfig) => (
    value: keyof typeof gradients | string
  ) => {
    return { backgroundImage: `linear-gradient(${gradients[value]})` }
  },
  flexGap: (config: typeof stitchesConfig) => (
    value: keyof typeof theme['space']
  ) => {
    return {
      '--gap': value,
      display: 'flex',
      flexFlow: 'row wrap',
      margin: 'calc(-1 * var(--gap)) 0 0 calc(-1 * var(--gap))',
      width: 'calc(100% + var(--gap))',
      '& > *': {
        margin: 'var(--gap) 0 0 var(--gap)',
      },
    }
  },
}
