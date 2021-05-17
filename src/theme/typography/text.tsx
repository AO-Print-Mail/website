import { ResetButton } from '@theme/atoms/resetButton'
import { CSS, styled } from '@theme/stitches.config'

const textSizes: CSS = {
  l: {
    fontSize: '$p2m',
    lineHeight: '$p2m',
    marginBottom: '-9px',
    '@m': {
      fontSize: '$p2t',
      lineHeight: '$p2t',
      marginBottom: '-8px',
    },
    '@l': {
      fontSize: '$p2d',
      lineHeight: '$p2d',
      marginBottom: '-9px',
    },
  },
  m: {
    fontSize: '$p3m',
    lineHeight: '$p3m',
    marginBottom: '-8px',
    '@m': {
      fontSize: '$p3t',
      lineHeight: '$p3t',
      marginBottom: '-7px',
    },
    '@l': {
      fontSize: '$p3d',
      lineHeight: '$p3d',
      marginBottom: '-8px',
    },
  },
  s: {
    fontSize: '$p4m',
    lineHeight: '$p4m',
    marginBottom: '-6px',
    '@m': {
      fontSize: '$p4t',
      lineHeight: '$p4t',
      marginBottom: '-6px',
    },
    '@l': {
      fontSize: '$p4d',
      lineHeight: '$p4d',
      marginBottom: '-7px',
    },
  },
  xs: {
    fontSize: '$p5m',
    lineHeight: '$p5m',
    marginBottom: '-5px',
    '@m': {
      fontSize: '$p5t',
      lineHeight: '$p5t',
      marginBottom: '-5px',
    },
    '@l': {
      fontSize: '$p5d',
      lineHeight: '$p5d',
      marginBottom: '-6px',
    },
  },
}
const leadSizes = {
  l: {
    fontSize: '$p1m',
    lineHeight: '$p1m',
    marginBottom: '-8px',
    '@m': {
      fontSize: '$p1t',
      lineHeight: '$p1t',
      marginBottom: '-9px',
    },
    '@l': {
      fontSize: '$p1d',
      lineHeight: '$p1d',
      marginBottom: '-10px',
    },
  },
  m: {
    fontSize: '$p2m',
    lineHeight: '$p2m',
    marginBottom: '-9px',
    '@m': {
      fontSize: '$p2t',
      lineHeight: '$p2t',
      marginBottom: '-8px',
    },
    '@l': {
      fontSize: '$p2d',
      lineHeight: '$p2d',
      marginBottom: '-9px',
    },
  },
  s: {
    fontSize: '$p3m',
    lineHeight: '$p3m',
    marginBottom: '-8px',
    '@m': {
      fontSize: '$p2t',
      lineHeight: '3p2t',
      marginBottom: '-7px',
    },
    '@l': {
      fontSize: '$p3d',
      lineHeight: '$p3d',
      marginBottom: '-8px',
    },
  },
}

export const Paragraph = styled('p', {
  color: '$DA75',
  fontWeight: '$regular',
  fontFamily: '$paragraph',
  mt: '$3',
  '@m': { mt: '$4' },
  '@ml': { mt: '$5' },
  variants: {
    size: { ...textSizes },
    color: {
      light: {
        color: '$LA75',
      },
      primary: {
        color: '$DBA75',
      },
    },
    lead: {
      true: {
        fontWeight: '$semibold',
      },
    },
    alignLeft: { true: { textAlign: 'left' } },
    alignRight: { true: { textAlign: 'right' } },
    alignCenter: { true: { textAlign: 'center' } },
    bold: { true: { fontWeight: 'bold' } },
    semiBold: { true: { fontWeight: '600' } },
    italic: { true: { textStyle: 'italic' } },
    marginTop: {
      none: { mt: '$0' },
      small: { mt: '$2', '@ml': { mt: '$3' } },
    },
  },
  compoundVariants: [
    { size: 'l', lead: 'true', css: { ...leadSizes.l } },
    { size: 'm', lead: 'true', css: { ...leadSizes.m } },
    { size: 's', lead: 'true', css: { ...leadSizes.s } },
  ],
  defaultVariants: {
    size: 'm',
  },
  'li &': {
    m: '0',
  },
  [`button &, ${ResetButton} &, label &`]: {
    m: '0 !important',
    p: '0 !important',
    lineHeight: '1 !important',
    color: 'inherit',
  },
  'label&, input&': {
    m: '0',
  },
})
