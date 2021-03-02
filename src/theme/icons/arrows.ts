import { createIcon } from './createIcon'

export const ArrowForward = createIcon({
  displayName: 'Forward Arrow',
  d: 'M3 13h14.2l-5.6 5.6L13 20l8-8-8-8-1.4 1.4 5.6 5.6H3v2z',
  viewBox: '0 0 24 24',
  defaultProps: {
    title: 'Forward arrow',
  },
})
export const ArrowBack = createIcon({
  displayName: 'Back Arrow',
  d: 'M21 11H6.8l5.6-5.6L11 4l-8 8 8 8 1.4-1.4L6.8 13H21v-2z',
  viewBox: '0 0 24 24',
  defaultProps: {
    title: 'Back arrow',
  },
})
