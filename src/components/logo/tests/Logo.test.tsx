/**
 * 📝 Notes for Contributors:
 *
 * - Ensure you write tests for component behavior defined in the hook.
 * - Ensure you write tests for the accessibility and interactions.
 * - No snapshot tests for components please! 🙂
 *
 * @see Testing-Guide https://chakra-ui.com/guides/component-guide#4-build-and-test
 */

import * as React from 'react'
import { render, testA11y, screen } from '@utils/test-utils'
import { Logo } from '@components/logo'

it('passes a11y test', async () => {
  await testA11y(<Logo color="primary" size="regular" />)
})
