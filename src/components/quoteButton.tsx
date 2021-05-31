import { CircleLoader } from '@theme/icons/circleLoader'
import { useState } from 'react'
import { Button } from './button'
import { Modal } from './modal/src/modal'
import { TempQuoteForm as QuoteForm } from './temp-quote-form'

export interface QuoteButtonProps extends React.ComponentProps<typeof Button> {}

export const QuoteButton: React.FC<QuoteButtonProps> = ({
  children,
  ...props
}) => {
  const [formWasSubmitted, setFormWasSubmitted] = useState(false)
  function handleFormSubmit() {
    setFormWasSubmitted(true)
  }
  function handleSubmitComplete(toggle) {
    return function () {
      toggle()
      setFormWasSubmitted(false)
    }
  }
  return (
    <Modal
      opens={({ modalIsOpen, toggleModal }) => (
        <QuoteForm
          toggle={toggleModal}
          onSubmissionClose={handleSubmitComplete(toggleModal)}
          onSubmissionComplete={handleFormSubmit}
          active={modalIsOpen}
        />
      )}
    >
      {({ toggleModal }) => (
        <Button onClick={toggleModal} {...props}>
          {children || 'Get a quote'}
        </Button>
      )}
    </Modal>
  )
}
