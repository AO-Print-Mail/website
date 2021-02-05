/**
 * 📝 Notes for Contributors:
 *
 * - When creating an interactive component, we recommend consuming the
 * component hook created.
 *
 * For example, if you wanted to build an accordion component,
 * you'll first create a `useAccordion` hook and then create an `Accordion` component
 *
 * - Ensure this component is properly themable by following [this guide](https://chakra-ui.com/docs/theming/component-style)
 *
 * - Ensure the component is composable and can adapt to multiple use-cases
 *
 * @see Guide https://chakra-ui.com/guides/component-guide
 * @see Theming https://chakra-ui.com/docs/theming/component-style
 */

import { styled } from '@theme'

export const Button = styled('button', {
  backgroundColor: '$orange',
  borderRadius: '9999px',
  fontSize: '13px',
  lineHeight: '1',
  fontWeight: 500,
  paddingTop: '10px',
  paddingBottom: '10px',
  paddingLeft: '16px',
  paddingRight: '16px',
  border: '0',
  color: '$N80',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '$O30',
  },
  '&:active': {
    backgroundColor: '$O40',
  },
})
