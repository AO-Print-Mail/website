import { styled, css } from '@theme'

export const Heading1 = styled('h1', {
  color: '$DA100',
  fontWeight: '$semibold',
  fontFamily: '$heading',
  fontSize: '$h1m',
  marginTop: '1em',
  lineHeight: '$1',
  marginBottom: '0.32em',
  letterSpacing: '$xcosy',
  variants: {
    color: {
      primary: {
        color: '$DBA100',
      },
      light: {
        color: '$LA100',
      },
    },
  },
  when: {
    m: {
      fontSize: '$h1t',
      letterSpacing: '$xcosy',
    },
    l: {
      fontSize: '$h1d',
      letterSpacing: '$xcosy',
    },
  },
})
export const Heading2 = styled('h2', {
  color: '$DA90',
  fontWeight: '$semibold',
  fontFamily: '$heading',
  fontSize: '$h2m',
  marginTop: '1em',
  lineHeight: '$1',
  marginBottom: '-0.19em',
  letterSpacing: '$cosy',
  variants: {
    color: {
      primary: {
        color: '$DBA90',
      },
      light: {
        color: '$LA90',
      },
    },
  },
  when: {
    m: {
      fontSize: '$h2t',
      letterSpacing: '$xcosy',
    },
    l: {
      fontSize: '$h2d',
      letterSpacing: '$xcosy',
    },
  },
})
export const Heading3 = styled('h3', {
  color: '$DA85',
  fontWeight: '$semibold',
  fontFamily: '$heading',
  fontSize: '$h3m',
  marginTop: '1em',
  lineHeight: '$2',
  marginBottom: '-0.24em',
  letterSpacing: '$cosy',
  variants: {
    color: {
      primary: {
        color: '$DBA85',
      },
      light: {
        color: '$LA85',
      },
    },
  },
  when: {
    m: {
      fontSize: '$h3t',
      letterSpacing: '$cosy',
    },
    l: {
      fontSize: '$h3d',
      letterSpacing: '$xcosy',
    },
  },
})
export const Heading4 = styled('h4', {
  color: '$DA80',
  fontWeight: '$semibold',
  fontFamily: '$heading',
  fontSize: '$h4m',
  marginTop: '1em',
  lineHeight: '$2',
  marginBottom: '-0.24em',
  letterSpacing: '$cosy',
  variants: {
    color: {
      primary: {
        color: '$DBA80',
      },
      light: {
        color: '$LA80',
      },
    },
  },
  when: {
    m: {
      fontSize: '$h4t',
      letterSpacing: '$cosy',
    },
    l: {
      fontSize: '$h4d',
      letterSpacing: '$cosy',
    },
  },
})
export const Heading5 = styled('h5', {
  color: '$DA75',
  fontWeight: '$semibold',
  fontFamily: '$heading',
  fontSize: '$h5m',
  marginTop: '1em',
  lineHeight: '$3',
  marginBottom: '-0.26em',
  letterSpacing: '$cosy',
  variants: {
    color: {
      primary: {
        color: '$DBA75',
      },
      light: {
        color: '$LA75',
      },
    },
  },
  when: {
    m: {
      fontSize: '$h5t',
      letterSpacing: '$cosy',
    },
    l: {
      fontSize: '$h5d',
      letterSpacing: '$cosy',
    },
  },
})
export const Heading6 = styled('h6', {
  color: '$DA70',
  fontWeight: '$semibold',
  fontFamily: '$heading',
  fontSize: '$h6m',
  marginTop: '1em',
  lineHeight: '$3',
  marginBottom: '-0.26em',
  letterSpacing: '$cosy',
  variants: {
    color: {
      primary: {
        color: '$DBA70',
      },
      light: {
        color: '$LA70',
      },
    },
  },
  when: {
    m: {
      fontSize: '$h6t',
      letterSpacing: '$cosy',
    },
    l: {
      fontSize: '$h6d',
      letterSpacing: '$cosy',
    },
  },
})
export const Paragraph1 = styled('p', {
  color: '$DA90',
  fontWeight: '$regular',
  fontFamily: '$paragraph',
  fontSize: '$p1m',
  marginTop: '1em',
  lineHeight: '$4',
  marginBottom: '-0.32em',
  letterSpacing: '$reg',
  variants: {
    color: {
      primary: {
        color: '$DBA80',
      },
      light: {
        color: '$LA80',
      },
    },
  },
  when: {
    m: {
      fontSize: '$p1t',
      letterSpacing: '$cosy',
    },
    l: {
      fontSize: '$p1d',
      letterSpacing: '$cosy',
    },
  },
})
export const Paragraph2 = styled('p', {
  color: '$DA80',
  fontWeight: '$regular',
  fontFamily: '$paragraph',
  fontSize: '$p2m',
  marginTop: '1em',
  lineHeight: '$4',
  marginBottom: '-0.32em',
  letterSpacing: '$reg',
  variants: {
    color: {
      primary: {
        color: '$DBA75',
      },
      light: {
        color: '$LA75',
      },
    },
  },
  when: {
    m: {
      fontSize: '$p2t',
      letterSpacing: '$reg',
    },
    l: {
      fontSize: '$p2d',
      letterSpacing: '$reg',
    },
  },
})
export const Paragraph3 = styled('p', {
  color: '$DA70',
  fontWeight: '$regular',
  fontFamily: '$paragraph',
  fontSize: '$p3m',
  marginTop: '1em',
  lineHeight: '$4',
  marginBottom: '-0.33em',
  letterSpacing: '$reg',
  variants: {
    color: {
      primary: {
        color: '$DBA70',
      },
      light: {
        color: '$LA70',
      },
    },
  },
  when: {
    m: {
      fontSize: '$p3t',
      letterSpacing: '$reg',
    },
    l: {
      fontSize: '$p3d',
      letterSpacing: '$reg',
    },
  },
})
export const Paragraph4 = styled('p', {
  color: '$DA70',
  fontWeight: '$regular',
  fontFamily: '$paragraph',
  fontSize: '$p4m',
  marginTop: '1em',
  lineHeight: '$5',
  marginBottom: '-0.33em',
  letterSpacing: '$reg',
  variants: {
    color: {
      primary: {
        color: '$DBA70',
      },
      light: {
        color: '$LA70',
      },
    },
  },
  when: {
    m: {
      fontSize: '$p4t',
      letterSpacing: '$reg',
    },
    l: {
      fontSize: '$p4d',
      letterSpacing: '$reg',
    },
  },
})
export const Paragraph5 = styled('p', {
  color: '$DA60',
  fontWeight: '$regular',
  fontFamily: '$paragraph',
  fontSize: '$p5m',
  marginTop: '1em',
  lineHeight: '$5',
  marginBottom: '-0.375em',
  letterSpacing: '$space',
  variants: {
    color: {
      primary: {
        color: '$DBA60',
      },
      light: {
        color: '$LA60',
      },
    },
  },
  when: {
    m: {
      fontSize: '$p5t',
      letterSpacing: '$space',
    },
    l: {
      fontSize: '$p5d',
      letterSpacing: '$space',
    },
  },
})

const uiProperties = {
  lineHeight: '$1',
  margin: '0',
  color: '$DA80',
  letterSpacing: '$space',
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
      unset: {
        color: 'unset',
      },
    },
    weight: {
      smb: {
        fontWeight: '$semibold',
      },
    },
  },
}

export const UI1 = styled('span', {
  ...uiProperties,
  fontSize: '$unset',
})
export const UI2 = styled('span', {
  ...uiProperties,
  fontSize: '$p3m',
  when: { m: { fontSize: '$p3t' }, l: { fontSize: '$p3d' } },
})
export const UI3 = styled('span', {
  ...uiProperties,
  fontSize: '$p4m',
  when: { m: { fontSize: '$p4t' }, l: { fontSize: '$p4d' } },
})

export const strikethroughClass = css({
  textDecoration: 'line-through',
})
export const underlineClass = css({
  textDecoration: 'underline',
})
