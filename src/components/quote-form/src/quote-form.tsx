import { Modal } from '@components/modal'
import { AnimatePresence } from 'framer-motion'
import React from 'react'
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
  return (
    <AnimatePresence>
      {active && (
        <Modal
          toggle={toggle}
          mobileWidth="full"
          width="l"
          layoutId={modalLayoutId}
        >
          <SelectService />
        </Modal>
      )}
    </AnimatePresence>
  )
}
