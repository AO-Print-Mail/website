import { Button } from '@components/button'
export interface SubmitButtonProps {
  isSubmitting: boolean
  setSubmitting: (a: boolean) => void
  toggleIsOpen: () => void
  changeStep: (a: string) => void
  formRef?: HTMLFormElement
}
export const SubmitButton: React.FC<SubmitButtonProps> = ({
  isSubmitting,
  setSubmitting,
  changeStep,
  toggleIsOpen,
}) => (
  <Button
    fullWidth
    size="cta"
    css={{
      flex: '1',
      when: {
        l: {
          mt: '$6',
        },
      },
    }}
    isLoading={isSubmitting}
    onClick={(e: PointerEvent) => {
      e.preventDefault()
      setSubmitting(true)
      toggleIsOpen()
      changeStep('1')
    }}
  >
    Start your quote
  </Button>
)
