import { styled, css } from '@theme'
import { forwardRef } from 'react'
import { ResetButton } from './resetButton'

export const Heading = styled('h1', {
  color: '$DA100',
  fontWeight: '$semibold',
  fontFamily: '$heading',
  fontSize: '$h1m',
  marginTop: '1em',
  lineHeight: '$2',
  marginBottom: '$3',
  letterSpacing: '$xcosy',
  '@m': {
    fontSize: '$h1t',
  },
  '@l': {
    fontSize: '$h1d',
  },
  variants: {
    color: {
      primary: {
        color: '$DBA100',
      },
      light: {
        color: '$LA100',
      },
    },
    level: {
      1: {},
      2: {
        color: '$DA90',
        fontSize: '$h2m',
        //marginBottom: '0.31em',
        letterSpacing: '$cosy',
        '@m': {
          fontSize: '$h2t',
          letterSpacing: '$xcosy',
        },
        '@l': {
          fontSize: '$h2d',
        },
      },
      3: {
        color: '$DA85',
        fontSize: '$h3m',
        //marginBottom: '0.26em',
        letterSpacing: '$cosy',
        '@m': {
          fontSize: '$h3t',
        },
        '@l': {
          fontSize: '$h3d',
          letterSpacing: '$xcosy',
        },
      },
      4: {
        color: '$DA80',
        fontSize: '$h4m',
        //marginBottom: '0.26em',
        letterSpacing: '$cosy',
        '@m': {
          fontSize: '$h4t',
        },
        '@l': {
          fontSize: '$h4d',
          letterSpacing: '$cosy',
        },
      },
      5: {
        color: '$DA80',
        fontSize: '$h5m',
        //marginBottom: '0.24em',
        letterSpacing: '$cosy',
        '@m': {
          fontSize: '$h5t',
        },
        '@l': {
          fontSize: '$h5d',
        },
      },
      6: {
        color: '$DA80',
        fontSize: '$h6m',
        //marginBottom: '-0.26em',
        letterSpacing: '$cosy',
        '@m': {
          fontSize: '$h6t',
        },
        '@l': {
          fontSize: '$h6d',
        },
      },
    },
    alignLeft: { true: { textAlign: 'left' } },
    alignRight: { true: { textAlign: 'right' } },
    alignCenter: { true: { textAlign: 'center' } },
  },
  compoundVariants: [
    { level: '1', color: 'primary', css: { color: '$DBA100' } },
    { level: '1', color: 'light', css: { color: '$LA100' } },
    { level: '2', color: 'primary', css: { color: '$DBA90' } },
    { level: '2', color: 'light', css: { color: '$LA90' } },
    { level: '3', color: 'primary', css: { color: '$DBA85' } },
    { level: '3', color: 'light', css: { color: '$LA85' } },
    { level: '4', color: 'primary', css: { color: '$DBA80' } },
    { level: '4', color: 'light', css: { color: '$LA80' } },
    { level: '5', color: 'primary', css: { color: '$DBA75' } },
    { level: '5', color: 'light', css: { color: '$LA75' } },
    { size: '6', color: 'primary', css: { color: '$DBA75' } },
    { size: '6', color: 'light', css: { color: '$LA75' } },
  ],
})

export const Heading1 = forwardRef<
  HTMLHeadingElement,
  React.ComponentProps<typeof Heading>
>((props, ref) => <Heading level="1" as="h1" ref={ref} {...props} />)
export const Heading2 = forwardRef<
  HTMLHeadingElement,
  React.ComponentProps<typeof Heading>
>((props, ref) => <Heading level="2" as="h2" ref={ref} {...props} />)
export const Heading3 = forwardRef<
  HTMLHeadingElement,
  React.ComponentProps<typeof Heading>
>((props, ref) => <Heading level="3" as="h3" ref={ref} {...props} />)
export const Heading4 = forwardRef<
  HTMLHeadingElement,
  React.ComponentProps<typeof Heading>
>((props, ref) => <Heading level="4" as="h4" ref={ref} {...props} />)
export const Heading5 = forwardRef<
  HTMLHeadingElement,
  React.ComponentProps<typeof Heading>
>((props, ref) => <Heading level="5" as="h5" ref={ref} {...props} />)
export const Heading6 = forwardRef<
  HTMLHeadingElement,
  React.ComponentProps<typeof Heading>
>(({ as = 'h6', ...props }, ref) => (
  <Heading level="6" as={as} ref={ref} {...props} />
))

export const Paragraph = styled('p', {
  color: 'inherit',
  fontWeight: '$regular',
  fontFamily: '$paragraph',
  fontSize: 'inherit',
  letterSpacing: 'inherit',
  lineHeight: 'inherit',
  variants: {
    color: {
      primary: {
        color: '$DBA80',
      },
      light: {
        color: '$LA80',
      },
      success: {
        color: '$green',
      },
      error: {
        color: '$red',
      },
      warning: {
        color: '$orange',
      },
    },
    alignLeft: { true: { textAlign: 'left' } },
    alignRight: { true: { textAlign: 'right' } },
    alignCenter: { true: { textAlign: 'center' } },
    bold: { true: { fontWeight: 'bold' } },
    semiBold: { true: { fontWeight: '600' } },
    italic: { true: { textStyle: 'italic' } },
    size: {
      1: {
        color: '$DA90',
        fontSize: '$p1m',
        lineHeight: '$4',
        marginBottom: '-0.32em',
        letterSpacing: '$reg',
        '@m': {
          fontSize: '$p1t',
          letterSpacing: '$cosy',
        },
        '@l': {
          fontSize: '$p1d',
          letterSpacing: '$cosy',
        },
      },
      2: {
        color: '$DA80',
        fontSize: '$p2m',
        lineHeight: '$4',
        marginBottom: '-0.32em',
        letterSpacing: '$reg',
        '@m': {
          fontSize: '$p2t',
          letterSpacing: '$reg',
        },
        '@l': {
          fontSize: '$p2d',
          letterSpacing: '$reg',
        },
      },
      3: {
        color: '$DA70',
        fontSize: '$p3m',
        lineHeight: '$4',
        marginBottom: '-0.33em',
        letterSpacing: '$reg',
        '@m': {
          fontSize: '$p3t',
          letterSpacing: '$reg',
        },
        '@l': {
          fontSize: '$p3d',
          letterSpacing: '$reg',
        },
      },
      4: {
        color: '$DA70',
        fontSize: '$p4',
        lineHeight: '$5',
        marginBottom: '-0.33em',
        letterSpacing: '$reg',

        '@m': {
          fontSize: '$p4t',
          letterSpacing: '$reg',
        },
        '@l': {
          fontSize: '$p4d',
          letterSpacing: '$reg',
        },
      },
      5: {
        color: '$DA60',
        fontSize: '$p5m',
        lineHeight: '$5',
        marginBottom: '-0.375em',
        letterSpacing: '$space',
        '@m': {
          fontSize: '$p5t',
          letterSpacing: '$space',
        },
        '@l': {
          fontSize: '$p5d',
          letterSpacing: '$space',
        },
      },
    },
  },
  compoundVariants: [
    { size: '1', color: 'primary', css: { color: '$DBA85' } },
    { size: '1', color: 'light', css: { color: '$LA85' } },
    { size: '2', color: 'primary', css: { color: '$DBA80' } },
    { size: '2', color: 'light', css: { color: '$LA80' } },
    { size: '3', color: 'primary', css: { color: '$DBA80' } },
    { size: '3', color: 'light', css: { color: '$LA80' } },
    { size: '4', color: 'primary', css: { color: '$DBA75' } },
    { size: '4', color: 'light', css: { color: '$LA75' } },
    { size: '5', color: 'primary', css: { color: '$DBA70' } },
    { size: '5', color: 'light', css: { color: '$LA70' } },
  ],
  'li &': {
    m: '0',
  },
  [`${ResetButton} &`]: {
    m: '0 !important',
    p: '0 !important',
    letterSpacing: '$reg !important',
  },
  'label&, input&, span&': {
    m: '0',
  },
})

export const Paragraph1 = forwardRef<
  HTMLParagraphElement,
  React.ComponentProps<typeof Paragraph>
>((props, ref) => <Paragraph size="1" ref={ref} {...props} />)
export const Paragraph2 = forwardRef<
  HTMLParagraphElement,
  React.ComponentProps<typeof Paragraph>
>((props, ref) => <Paragraph size="2" ref={ref} {...props} />)
export const Paragraph3 = forwardRef<
  HTMLParagraphElement,
  React.ComponentProps<typeof Paragraph>
>((props, ref) => <Paragraph size="3" ref={ref} {...props} />)
export const Paragraph4 = forwardRef<
  HTMLParagraphElement,
  React.ComponentProps<typeof Paragraph>
>((props, ref) => <Paragraph size="4" ref={ref} {...props} />)
export const Paragraph5 = forwardRef<
  HTMLParagraphElement,
  React.ComponentProps<typeof Paragraph>
>((props, ref) => <Paragraph size="5" ref={ref} {...props} />)

export const UI = forwardRef<
  HTMLSpanElement,
  React.ComponentProps<typeof Paragraph>
>((props, ref) => <Paragraph as="span" ref={ref} {...props} />)

export const strikethroughClass = css({
  textDecoration: 'line-through',
})
export const underlineClass = css({
  textDecoration: 'underline',
})
