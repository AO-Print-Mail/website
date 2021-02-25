import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useStateMachine } from 'little-state-machine'
import {
  Flex,
  Box,
  Paragraph3,
  UI3,
  styled,
  RadioButton,
  TextArea,
} from '@theme'
import { Button } from '@components/button'
import { QuoteFormInputData } from './landing-page-quote-form'
import { updateAdditionalInformation } from '@lib/little-state-machine'

export interface Step2Props extends QuoteFormInputData {
  changeStep: (step: string) => unknown
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

  const requiresArtwork = services === 'Print and mail'

  useEffect(() => {
    if (!requiresArtwork) {
      actions.updateAdditionalInformation({ artworkReady: '[n/a]' })
    }
  }, [services])

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Flex fillHeight column css={{ px: '$6', py: '$4' }}>
        {/* register your input into the hook by invoking the "register" function */}
        <Box css={{ flex: '1 1' }}>
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
            Additional information(optional)
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
              autocomplete="off"
              defaultValue={additionalInformation}
              css={{ width: '100%' }}
            />
          </Box>
        </Box>
        <Flex column css={{ mt: '$4', pb: '$4', mx: '$6' }}>
          <Button
            fullWidth
            size="cta"
            type="submit"
            css={{ alignSelf: 'center' }}
          >
            <UI3 css={{ color: '$white' }}>Next</UI3>
          </Button>
        </Flex>
      </Flex>
    </Form>
  )
}
