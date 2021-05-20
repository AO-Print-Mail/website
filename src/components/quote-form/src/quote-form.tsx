import React from 'react'
import { m as motion, useAnimation } from 'framer-motion'
import { Modal } from '@components/modal'
import { AnimatePresence } from 'framer-motion'
import { SelectService } from './select-service'

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
          width="l"
          layoutId={modalLayoutId}
          showCloseButton={true}
          as={motion.div}
          animate={innerContentControls}
          initial="hidden"
        >
          <SelectService {...props} />
        </Modal>
      )}
    </AnimatePresence>
  )
}
