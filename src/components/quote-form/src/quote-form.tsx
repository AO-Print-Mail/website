import React from 'react'
import { m as motion, useAnimation } from 'framer-motion'
import { Modal } from '@components/modal'
import { AnimatePresence } from 'framer-motion'
import { FormController } from './formControler/formController'

interface QuoteFormProps {
  active: boolean
  modalLayoutId?: string
  toggle: (e: React.MouseEvent) => void
}

export const QuoteForm: React.FC<QuoteFormProps> = ({
  active,
  modalLayoutId,
  toggle,
  ...props
}) => {
  const innerContentControls = useAnimation()
  return (
    <AnimatePresence>
      {active && (
        <Modal
          toggle={toggle}
          mobileWidth="full"
          width="m"
          layoutId={modalLayoutId}
          showCloseButton={true}
          as={motion.div}
          animate={innerContentControls}
          initial="hidden"
        >
          <FormController toggle={toggle} />
        </Modal>
      )}
    </AnimatePresence>
  )
}
