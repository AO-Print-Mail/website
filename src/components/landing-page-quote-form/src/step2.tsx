import { useForm, useWatch } from 'react-hook-form'
import { useStateMachine } from 'little-state-machine'
import { Flex, Box, Paragraph3, UI3, styled } from '@theme'
import { Button } from '@components/button'
import { QuoteFormInputData } from './landing-page-quote-form'
import { updateAdditionalInformation } from '@lib/little-state-machine'

export interface Step2Props extends QuoteFormInputData {
  changeStep: (step: string) => unknown
}

export interface AdditionalInformation {
  artworkReady:
    | 'yes'
    | 'no'
    | 'interested in print design'
    | '[n/a]'
    | '[not provided]'
  addressDataReady:
    | 'yes'
    | 'no'
    | 'interested in buying a list'
    | '[n/a]'
    | '[not provided]'
  additionalInformation?: string
  //fileAttachments: <filetype>[] -- To be built - allow multiple attachments
  //isFileAttached: boolean  -- Useful for letting agent know something is attached in the form data
}

const Form = styled('form', {
  height: '100%',
})

export const Step2: React.FC<Step2Props> = ({ changeStep }) => {
  const { state, actions } = useStateMachine({ updateAdditionalInformation })
  const {
    register,
    handleSubmit,
    watch,
    errors,
  } = useForm<AdditionalInformation>()

  const onSubmit = (data) => {
    actions.updateAdditionalInformation(data)
    changeStep('3')
  }

  const {
    additionalInformation: {
      artworkReady,
      addressDataReady,
      additionalInformation,
    },
    jobInformation: { services, frequency },
    //@ts-expect-error
  } = state.formData?.directMailForm
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Flex fillHeight column css={{ px: '$6', py: '$4' }}>
        {/* register your input into the hook by invoking the "register" function */}
        <Box css={{ flex: '1 1' }}>
          {services === 'Print and mail' && (
            <>
              <Paragraph3>Do you have artwork ready for printing?</Paragraph3>
              <Box css={{ mt: '$3', pb: '$2' }}>
                <input
                  type="radio"
                  id="artworkReady1"
                  name="artworkReady"
                  ref={register}
                  value="yes"
                  defaultChecked={artworkReady === 'yes'}
                />
                <label htmlFor="artworkReady1">Yes</label>
                <input
                  type="radio"
                  id="artworkReady2"
                  name="artworkReady"
                  value="no"
                  ref={register}
                  defaultChecked={artworkReady === 'no'}
                />
                <label htmlFor="artworkReady2">Not yet</label>
                <input
                  type="radio"
                  id="artworkReady3"
                  name="artworkReady"
                  value="interested in print design"
                  ref={register}
                  defaultChecked={artworkReady === 'interested in print design'}
                />
                <label htmlFor="artworkReady3">
                  Interested in print design
                </label>
              </Box>
            </>
          )}
          {frequency === 'One-off' && (
            <>
              <Paragraph3>Is your address data ready to use?</Paragraph3>
              <Box css={{ mt: '$3', pb: '$2' }}>
                <input
                  type="radio"
                  id="addressDataReady1"
                  name="addressDataReady"
                  value="yes"
                  ref={register}
                  defaultChecked={addressDataReady === 'yes'}
                />
                <label htmlFor="addressDataReady1">Yes</label>
                <input
                  type="radio"
                  id="addressDataReady2"
                  name="addressDataReady"
                  value="no"
                  ref={register}
                  defaultChecked={addressDataReady === 'no'}
                />
                <label htmlFor="addressDataReady2">Not yet</label>
                <input
                  type="radio"
                  id="addressDataReady3"
                  name="addressDataReady"
                  value="interested in buying a list"
                  ref={register}
                  defaultChecked={
                    addressDataReady === 'interested in buying a list'
                  }
                />
                <label htmlFor="addressDataReady3">
                  Interested in buying a list
                </label>
              </Box>
            </>
          )}
          <Paragraph3 as="label" htmlFor="additionalInformation">
            Additional information(optional)
          </Paragraph3>
          <Box css={{ mt: '$3', pb: '$2' }}>
            <textarea
              id="additionalInformation"
              name="additionalInformation"
              rows={5}
              cols={33}
              placeholder="Please include any additional information that is applicable to your job."
              ref={register}
              defaultValue={additionalInformation}
            ></textarea>
          </Box>
        </Box>
        <Flex column css={{ mt: '$4', pb: '$4', mx: '$6' }}>
          <Button fullWidth type="submit" css={{ alignSelf: 'center' }}>
            <UI3 css={{ color: '$white' }}>Next</UI3>
          </Button>
        </Flex>
      </Flex>
    </Form>
  )
}
