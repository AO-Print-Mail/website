import { forwardRef } from 'react'
import { styled, theme, CSS } from '..'
import { toCamelCase } from '@utils/src/text-transforms'

export interface IconProps {
  viewBox?: string
  color?: string | keyof typeof theme['colors']
  size?: string | keyof typeof theme['sizes']
  focusable?: boolean
  css?: CSS
  role?: string
  title?: string
  description?: string
  displayName?: string
}
export const Svg = styled('svg', {
  fill: 'none',
  verticalAlign: 'middle',
  lineHeight: '1em',
  variants: {
    size: {
      matchFontSize: {
        size: '1em',
      },
      regular: {
        size: '24px',
      },
      small: {
        size: '16px',
      },
      custom: { size: 'unset' },
    },
  },
  defaultVariants: {
    size: 'matchFontSize',
  },
})

export const Icon = forwardRef<SVGElement, IconProps>(
  (
    {
      viewBox = '0 0 24 24',
      focusable = false,
      children,
      role,
      title,
      displayName,
      description,
      ...props
    },
    ref
  ) => {
    const c = title && displayName && toCamelCase(title)
    const cTitle = c && c + 'Title'
    const cDesc = c && description && c + 'Desc'
    const ariaLabelledBy = cTitle && `${cTitle}${cDesc ? ` ${cDesc}` : ``}`

    return (
      <Svg
        ref={ref}
        role={role}
        aria-labelledby={ariaLabelledBy}
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        {title && <title id={cTitle}>{title}</title>}
        {description && <desc id={cDesc}>{description}</desc>}
        {children}
      </Svg>
    )
  }
)
