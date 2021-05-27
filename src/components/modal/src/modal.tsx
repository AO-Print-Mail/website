import { LayoutContext } from '@components/layout/src/layoutContext'
import type { ModalProps } from '@components/modal/src/modalBody'
import { AnimatePresence, useCycle } from 'framer-motion'
import dynamic from 'next/dynamic'
import { useContext } from 'react'

const ModalBody = dynamic(
  () => import('@components/modal/src/modalBody').then((res) => res.ModalBody),
  { ssr: false }
)

type ModalRenderProps = ({
  modalIsOpen,
  toggleModal,
}: {
  modalIsOpen: boolean
  toggleModal: () => void
}) => React.ReactNode
interface QuoteFormProps extends ModalProps {
  opens: ModalRenderProps
  children: ModalRenderProps
}

export const Modal: React.FC<QuoteFormProps> = ({
  width,
  opens,
  children,
  layoutId,
  ...props
}) => {
  const [modalIsOpen, toggleModalIsOpen] = useCycle(false, true)
  const { toggleScrollLock, setShowNav } = useContext(LayoutContext)

  function toggleModal() {
    toggleScrollLock()
    toggleModalIsOpen()
  }

  const modalProps: ModalProps = {
    toggle: toggleModal,
    layoutId,
    ...props,
  }

  return (
    <>
      {children({ modalIsOpen, toggleModal })}
      <AnimatePresence>
        {modalIsOpen && (
          <ModalBody width {...modalProps}>
            {opens({ modalIsOpen, toggleModal })}
          </ModalBody>
        )}
      </AnimatePresence>
    </>
  )
}
