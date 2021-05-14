import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useStateMachine } from 'little-state-machine'
import {
  AnimatePresence,
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
  const [modalIsOpen, toggleModal] = useCycle(false, true)
  const [isSubmitting, setSubmitting] = useState(false)
  const router = useRouter()
  const {
    step,
    resetForm,
    pageSlug,
  }: { [k: string]: any; step?: FormSteps } = router.query
  const { actions } = useStateMachine({ resetFormData })

  const handleReset = () => actions.resetFormData('directMailForm')
  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault()
    toggleModal()
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
    isOpen: modalIsOpen,
    isSubmitting,
    changeStep: setStep,
    toggleIsOpen: toggleModal,
    setSubmitting,
    progress,
    keyword: 'Direct Mail',
    breakpoints,
  }

  return (
    <AnimateSharedLayout>
      <Wrapper as={motion.div} layoutId="quote-modal">
        <QuoteIntro {...formControls} />
      </Wrapper>
      <AnimatePresence>
        {modalIsOpen && (
          <Modal
            mobileWidth="full"
            toggle={handleToggle}
            layoutId="quote-modal"
            showCloseButton={false}
          >
            {step ? (
              <FormStepper {...formControls} />
            ) : (
              <QuoteIntro {...formControls} />
            )}
          </Modal>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  )
}
