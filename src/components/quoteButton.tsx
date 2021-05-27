import { Button } from './button'
import { Modal } from './modal/src/modal'
import { TempQuoteForm as QuoteForm } from './temp-quote-form'

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
