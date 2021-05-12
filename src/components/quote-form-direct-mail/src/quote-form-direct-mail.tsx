import {
  AnimatePresence,
  AnimateSharedLayout,
  m as motion,
  useCycle,
} from 'framer-motion'

import { Wrapper } from './wrapper'
import { Button } from '@components/button'
import { Modal } from '@components/modal'

interface QuoteFormDirectMailProps {}

export const QuoteFormDirectMail: React.FC<QuoteFormDirectMailProps> = (
  props
) => {
  const [modalIsOpen, toggleModal] = useCycle(false, true)
  const handleToggle = (e: React.MouseEvent) => {
    toggleModal()
  }
  return (
    <AnimateSharedLayout>
      <Wrapper as={motion.div} layoutId="quote-modal">
        <Button layout onClick={handleToggle}>
          Open
        </Button>
        <AnimatePresence>
          {modalIsOpen && (
            <Modal
              mobileWidth="full"
              toggle={handleToggle}
              layoutId="quote-modal"
            ></Modal>
          )}
        </AnimatePresence>
      </Wrapper>
    </AnimateSharedLayout>
  )
}