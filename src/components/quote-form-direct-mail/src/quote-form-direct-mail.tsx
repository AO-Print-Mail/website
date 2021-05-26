import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useStateMachine } from 'little-state-machine'
import {
  AnimateSharedLayout,
  m as motion,
  useCycle,
  useMotionValue,
} from 'framer-motion'
import dynamic from 'next/dynamic'

import { resetFormData } from '@lib/little-state-machine/actions'
import { useBreakpoints } from '@lib/react/breakpoints'

import { Wrapper } from './wrapper'
import { Modal } from '@components/modal'
import { FormSteps } from '@components/landing-page-quote-form'
import { QuoteIntro } from './intro'

interface QuoteFormDirectMailProps {}

const FormStepper = dynamic(() =>
  import('../../landing-page-quote-form/src/steps').then(
    (res) => res.FormStepper
  )
)

export const QuoteFormDirectMail: React.FC<QuoteFormDirectMailProps> = (
  props
) => {
  const breakpoints = useBreakpoints()
  const progress = useMotionValue(0)
  const [isSubmitting, setSubmitting] = useState(false)
  const router = useRouter()
  const {
    step,
    resetForm,
    pageSlug,
  }: { [k: string]: any; step?: FormSteps } = router.query
  const { actions } = useStateMachine({ resetFormData })

  const handleReset = () => actions.resetFormData('directMailForm')

  function handleClick(toggle: () => void) {
    return function (e?: React.MouseEvent) {
      e.preventDefault()
      toggle
    }
  }

  function setStep(newStep?: string) {
    //@ts-ignore
    const newPath = router.pathname.replace('[pageSlug]', pageSlug)
    router.push(
      {
        pathname: `${newPath}`,
        query: newStep ? { step: newStep } : {},
      },
      null,
      { shallow: true }
    )
  }

  useEffect(() => {
    if (resetForm) {
      handleReset()
      setStep()
    }
  }, [step])

  const formControls = {
    step,
    isSubmitting,
    changeStep: setStep,
    setSubmitting,
    progress,
    keyword: 'Direct Mail',
    breakpoints,
  }

  return (
    <AnimateSharedLayout>
      <Modal
        mobileWidth="full"
        layoutId="quote-modal"
        showCloseButton={false}
        opens={({ modalIsOpen, toggleModal }) =>
          step ? (
            <FormStepper
              toggleIsOpen={handleClick(toggleModal)}
              isOpen={modalIsOpen}
              {...formControls}
            />
          ) : (
            <QuoteIntro
              toggleIsOpen={handleClick(toggleModal)}
              isOpen={modalIsOpen}
              {...formControls}
            />
          )
        }
      >
        {({ modalIsOpen, toggleModal }) => (
          <Wrapper as={motion.div} layoutId="quote-modal">
            <QuoteIntro
              toggleIsOpen={handleClick(toggleModal)}
              isOpen={modalIsOpen}
              {...formControls}
            />
          </Wrapper>
        )}
      </Modal>
      )
    </AnimateSharedLayout>
  )
}
