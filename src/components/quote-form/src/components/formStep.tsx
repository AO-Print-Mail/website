import { Button } from '@components/button'
import { CtaLink, Flex } from '@theme/atoms'
import { ArrowForward } from '@theme/icons'
import { Paragraph } from '@theme/typography'
import { m as motion, Variants } from 'framer-motion'
import React from 'react'
import { StepControls } from '../hooks/useQuerySteps'
import { ButtonSelectType, InputType } from '../types'
import { Step } from '../types/schemaTypes'
import { StepTitleBar } from './stepTitleBar'

export interface FormStepProps extends Step {
  stepControls: StepControls
}

export const FormStep: React.FC<FormStepProps> = ({
  step_id,
  step_title,
  mandatory,
  stepControls,
  fields,
}) => {
  function handleSkip(e: React.MouseEvent) {
    e.preventDefault()
    if (!mandatory) {
      stepControls.nextStep()
    }
  }
  return (
    <>
      <StepTitleBar
        mandatory={mandatory}
        step_title={step_title}
        handleSkip={handleSkip}
      ></StepTitleBar>
    </>
  )
}
