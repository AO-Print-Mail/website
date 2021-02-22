export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}
import React from 'react'
import { globalStyles } from '../src/theme'

export const decorators = [
  (Story) => {
    globalStyles()
    return (
      <>
        <Story />
        <div id="portal-modal"></div>
      </>
    )
  },
]
