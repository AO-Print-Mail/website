export const fontFace = {
  /* -------------------- */
  /*       HEADINGS       */
  /* -------------------- */

  /* SEMIBOLD */
  /* Basic latin without numbers - preloaded */
  '@font-face': {
    fontFamily: 'AoRcltSMB',
    fontStyle: 'normal',
    fontWeight: '600',
    fontDisplay: 'swap',
    src: `url("/fonts/ao-rcltsmbld/ao-rcltsmb-alph.woff2") format("woff2"), url("/fonts/ao-rcltsmbld/ao-rcltsmb-alph.woff") format("woff"), url("/fonts/ao-rcltsmbld/ao-rcltsmb-alph.ttf") format("truetype")`,
    unicodeRange: ' U+0020-0021, U+0061-007A, U+003E-005A, U+002C-002E, U+0026',
  },
  /* Numbers*/
  '@font-face': {
    fontFamily: 'AoRcltSMB',
    fontStyle: 'normal',
    fontWeight: '600',
    fontDisplay: 'swap',
    src:
      'url("/fonts/ao-rcltsmbld/ao-rcltsmb-num.woff2") format("woff2"), url("/fonts/ao-rcltsmbld/ao-rcltsmb-num.woff") format("woff"), url("/fonts/ao-rcltsmbld/ao-rcltsmb-num.ttf") format("truetype")',
    unicodeRange: ' U+002F-003D',
  },
  /* Extended puctuation*/
  '@font-face': {
    fontFamily: 'AoRcltSMB',
    fontStyle: 'normal',
    fontWeight: '600',
    fontDisplay: 'swap',
    src:
      'url("/fonts/ao-rcltsmbld/ao-rcltsmb-punc.woff2") format("woff2"), url("/fonts/ao-rcltsmbld/ao-rcltsmb-punc.woff") format("woff"), url("/fonts/ao-rcltsmbld/ao-rcltsmb-punc.ttf") format("truetype")',
    unicodeRange: ' U+0022-0025, U+0027-002B, U+005B-0060',
  },
  /* Latin extended */
  '@font-face': {
    fontFamily: 'AoRcltSMB',
    fontStyle: 'normal',
    fontWeight: '600',
    fontDisplay: 'swap',
    src:
      'url("/fonts/ao-rcltsmbld/ao-rcltsmb-rest.woff2") format("woff2"), url("/fonts/ao-rcltsmbld/ao-rcltsmb-rest.woff") format("woff"), url("/fonts/ao-rcltsmbld/ao-rcltsmb-rest.ttf") format("truetype")',
    unicodeRange: ' U+007B-F8FF',
  },

  /* -------------------- */
  /*       PARAGRAPHS     */
  /* -------------------- */

  /* REGULAR */ /* Basic latin - preloaded */
  '@font-face': {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontDisplay: 'swap',
    src:
      'url("/fonts/inter/inter-reg-ltb.woff2") format("woff2"), url("/fonts/inter/inter-reg-ltb.woff") format("woff")',
    unicodeRange: ' U+0020-007F, U+00A9',
  },
  /* Latin supplement */
  '@font-face': {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontDisplay: 'swap',
    src:
      'url("/fonts/inter/inter-reg-lts.woff2") format("woff2"), url("/fonts/inter/inter-reg-lts.woff") format("woff")',
    unicodeRange: ' U+00A0-00A8, U+00AA-00FF',
  },

  /* ITALIC */ /* Basic latin */
  '@font-face': {
    fontFamily: 'Inter',
    fontStyle: ' italic',
    fontWeight: '400',
    fontDisplay: 'swap',
    src:
      'url("/fonts/inter/inter-italic-ltb.woff2") format("woff2"), url("/fonts/inter/inter-italic-ltb.woff") format("woff")',
    unicodeRange: ' U+0020-007F',
  },
  /* Latin supplement */
  '@font-face': {
    fontFamily: 'Inter',
    fontStyle: ' italic',
    fontWeight: '400',
    fontDisplay: 'swap',
    src:
      'url("/fonts/inter/inter-italic-lts.woff2") format("woff2"), url("/fonts/inter/inter-italic-lts.woff") format("woff")',
    unicodeRange: ' U+00A0-00FF',
  },

  /* BOLD */ /* Basic latin*/
  '@font-face': {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontDisplay: 'swap',
    src:
      'url("/fonts/inter/inter-bold-ltb.woff2") format("woff2"), url("/fonts/inter/inter-bold-ltb.woff") format("woff")',
    unicodeRange: ' U+0020-007F',
  },
  /* Latin supplement */
  '@font-face': {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontDisplay: 'swap',
    src:
      'url("/fonts/inter/inter-bold-lts.woff2") format("woff2"), url("/fonts/inter/inter-bold-lts.woff") format("woff")',
    unicodeRange: ' U+00A0-00FF',
  },

  /* BOLD ITALIC ,*/
  /* Basic latin */
  '@font-face': {
    fontFamily: 'Inter',
    fontStyle: ' italic',
    fontWeight: '700',
    fontDisplay: 'swap',
    src:
      'url("/fonts/inter/inter-bldit-ltb.woff2") format("woff2"), url("/fonts/inter/inter-bldit-ltb.woff") format("woff")',
    unicodeRange: ' U+0020-007F',
  },
  /* Latin supplement */
  '@font-face': {
    fontFamily: 'Inter',
    fontStyle: ' italic',
    fontWeight: '700',
    fontDisplay: 'swap',
    src:
      'url("/fonts/inter/inter-bldit-lts.woff2") format("woff2"), url("/fonts/inter/inter-bldit-lts.woff") format("woff")',
    unicodeRange: ' U+00A0-00FF',
  },

  /* SEMI-BOLD */ /* Basic latin - preloaded */
  '@font-face': {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontDisplay: 'swap',
    src:
      'url("/fonts/inter/inter-smb-ltb.woff2") format("woff2"), url("/fonts/inter/inter-smb-ltb.woff") format("woff")',
    unicodeRange: ' U+0020-007F',
  },
  /* Latin supplement */
  '@font-face': {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontDisplay: 'swap',
    src:
      'url("/fonts/inter/inter-smb-lts.woff2") format("woff2"),url("/fonts/inter/inter-smb-lts.woff") format("woff")',
    unicodeRange: ' U+00A0-00FF',
  },
}
