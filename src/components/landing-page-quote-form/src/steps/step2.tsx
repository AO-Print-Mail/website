import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useStateMachine } from 'little-state-machine'
import { Flex, Box, Paragraph3, RadioButton, TextArea } from '@theme'
import type { FormSteps } from '../landing-page-quote-form'
import { FormStepControls } from '../formStepControls'
import { updateDirectMailForm } from '@lib/little-state-machine'
import { MotionValue } from 'framer-motion'
import { StepWrapper } from './stepWrapper'
import type { BreakpointsAry } from '@lib/react/breakpoints'

export interface Step2Props extends AdditionalInformation {
  changeStep: (step: string) => unknown
  isSubmitting: boolean
  setSubmitting: () => void
  header: React.ReactNode
  progress: MotionValue<number>
  breakpoints: BreakpointsAry
  isOpen: boolean
  toggleIsOpen: () => void
}

export interface AdditionalInformation {
  artworkReady?:
    | 'yes'
    | 'no'
    | 'interested in print design'
    | '[n/a]'
    | '[unknown]'
  addressDataReady?:
    | 'yes'
    | 'no'
    | 'interested in buying a list'
    | '[n/a]'
    | '[unknown]'
  additionalInformation?: string
  //fileAttachments: <filetype>[] -- To be built - allow multiple attachments
  //isFileAttached: boolean  -- Useful for letting agent know something is attached in the form data
}

export const Step2: React.FC<Step2Props> = ({
  changeStep,
  isSubmitting,
  header,
  progress,
  breakpoints,
  isOpen,
  setSubmitting,
  toggleIsOpen,
  ...props
}) => {
  const { state, actions } = useStateMachine({ updateDirectMailForm })
  const { register, handleSubmit, errors } = useForm<AdditionalInformation>()
  const onSubmit = (data) => {
    actions.updateDirectMailForm({ ...data })
    changeStep('3')
  }

  progress.set(75)

  const {
    artworkReady,
    addressDataReady,
    additionalInformation,
    services,
    //@ts-ignore
  } = state.formData?.directMailForm

  const requiresArtwork = services === 'Print and mail'

  useEffect(() => {
    if (!requiresArtwork) {
      actions.updateDirectMailForm({ artworkReady: '[n/a]' })
    }
  }, [])

  const formName = 'step2form'

  return (
    <StepWrapper
      breakpoints={breakpoints}
      onSubmit={handleSubmit(onSubmit)}
      header={header}
      isOpen={isOpen}
      formName={formName}
      isSubmitting={isSubmitting}
      setSubmitting={setSubmitting}
      toggleIsOpen={toggleIsOpen}
      formFields={({ childrenAnimationVariants }) => (
        <>
          {requiresArtwork && (
            <>
              <Paragraph3 css={{ color: '$DA80' }}>
                Do you have artwork ready for printing?
              </Paragraph3>
              <Flex wrap css={{ mt: '$3', pb: '$2' }}>
                <RadioButton
                  id="artworkReady1"
                  name="artworkReady"
                  ref={register}
                  value="yes"
                  defaultChecked={artworkReady === 'yes'}
                >
                  Yes
                </RadioButton>
                <RadioButton
                  id="artworkReady2"
                  name="artworkReady"
                  ref={register}
                  value="no"
                  defaultChecked={artworkReady === 'no'}
                >
                  Not yet
                </RadioButton>
                <RadioButton
                  id="artworkReady3"
                  name="artworkReady"
                  ref={register}
                  value="interested in print design"
                  defaultChecked={artworkReady === 'interested in print design'}
                >
                  Interested in print design
                </RadioButton>
              </Flex>
            </>
          )}
          <Paragraph3 css={{ color: '$DA80' }}>
            Is your recipient data file ready?
          </Paragraph3>
          <Flex wrap css={{ mt: '$3', pb: '$2' }}>
            <RadioButton
              id="addressDataReady1"
              name="addressDataReady"
              ref={register}
              value="yes"
              defaultChecked={addressDataReady === 'yes'}
            >
              Yes
            </RadioButton>
            <RadioButton
              id="addressDataReady2"
              name="addressDataReady"
              ref={register}
              value="no"
              defaultChecked={addressDataReady === 'no'}
            >
              Not yet
            </RadioButton>
            <RadioButton
              id="addressDataReady3"
              name="addressDataReady"
              ref={register}
              value="interested in buying a list"
              defaultChecked={
                addressDataReady === 'interested in buying a list'
              }
            >
              Interested in buying a list
            </RadioButton>
          </Flex>
          <Paragraph3
            as="label"
            htmlFor="additionalInformation"
            css={{ color: '$DA80', display: 'block' }}
          >
            Your brief (optional)
          </Paragraph3>
          <Box css={{ mt: '$3', pb: '$2' }}>
            <TextArea
              resizeVertical
              id="additionalInformation"
              name="additionalInformation"
              rows={8}
              cols={30}
              placeholder="Please include any additional information that is applicable to your job."
              ref={register}
              autoComplete="off"
              defaultValue={additionalInformation}
              css={{ width: '100%' }}
            />
          </Box>
        </>
      )}
      footer={
        <FormStepControls
          isOpen={isOpen}
          isSubmitting={isSubmitting}
          buttonLabel={isOpen ? 'Next' : 'Continue your quote'}
          buttonOnClick={(e: React.PointerEvent) => {
            if (!isOpen) {
              e.preventDefault()
              toggleIsOpen()
            }
          }}
          formName={formName}
          toggleIsOpen={toggleIsOpen}
        />
      }
    />
  )
}
