import { ThemeVariants } from '@theme/stitches.config'
import { styled, theme, css, tcss } from '..'

const fallbackIcon = {
  path: (
    <g stroke="currentColor" strokeWidth="1.5">
      <path
        strokeLinecap="round"
        fill="none"
        d="M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
      />
      <path
        fill="currentColor"
        strokeLinecap="round"
        d="M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
      />
      <circle fill="none" strokeMiterlimit="10" cx="12" cy="12" r="11.25" />
    </g>
  ),
  viewBox: '0 0 24 24',
}

export const Svg = styled('svg', {
  fill: 'none',
  verticalAlign: 'middle',
  lineHeight: '1em',
})

export interface IconProps {
  viewBox?: string
  color?: string | keyof typeof theme['colors']
  size?: string | keyof typeof theme['sizes']
  focusable?: boolean
  children?: React.ReactNode
  css?: {}
}

export const Icon = ({
  viewBox = '0 0 24 24',
  color = 'currentColor',
  size = '1em',
  focusable = false,
  d = fallbackIcon,
  css = {},
  children,
  ...props
}) => {
  return (
    <Svg
      css={{ height: size, width: size, color, ...css }}
      {...props}
      viewBox={viewBox}
    >
      {children}
    </Svg>
  )
}
