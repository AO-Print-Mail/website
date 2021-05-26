import { Button } from './button'
import { QuoteForm } from './quote-form'
import { Modal } from '@components/modal/src/modal-copy'

export interface QuoteButtonProps extends React.ComponentProps<typeof Button> {}

export const QuoteButton: React.FC<QuoteButtonProps> = ({ ...props }) => {
  return (
    <Modal
      opens={({ modalIsOpen, toggleModal }) => (
        <QuoteForm toggle={toggleModal} active={modalIsOpen} />
      )}
    >
      {({ toggleModal }) => (
        <Button onClick={toggleModal} {...props}>
          Get a quote
        </Button>
      )}
    </Modal>
  )
}
