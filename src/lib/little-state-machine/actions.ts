import { GlobalState } from 'little-state-machine'
import { store } from './store'
import {
  JobInformation,
  AdditionalInformation,
  ContactInformation,
  MarketingInformation,
} from '@components/landing-page-quote-form'

export function updateJobInformation(
  state: GlobalState,
  payload: JobInformation
): GlobalState {
  return {
    ...state,
    formData: {
      ...state?.formData,
      directMailForm: {
        ...state?.formData?.directMailForm,
        jobInformation: {
          ...state?.formData?.directMailForm?.jobInformation,
          ...payload,
        },
      },
    },
  }
}
export function updateAdditionalInformation(
  state: GlobalState,
  payload: AdditionalInformation
): GlobalState {
  return {
    ...state,
    formData: {
      ...state?.formData,
      directMailForm: {
        ...state?.formData?.directMailForm,
        additionalInformation: {
          ...state.formData.directMailForm.additionalInformation,
          ...payload,
        },
      },
    },
  }
}
export function updateContactInformation(
  state: GlobalState,
  payload: ContactInformation
): GlobalState {
  return {
    ...state,
    formData: {
      ...state?.formData,
      directMailForm: {
        ...state?.formData?.directMailForm,
        contactInformation: {
          ...state.formData.directMailForm.contactInformation,
          ...payload,
        },
      },
    },
  }
}
export function updateMarketingInformation(
  state: GlobalState,
  payload: MarketingInformation
): GlobalState {
  return {
    ...state,
    formData: {
      ...state?.formData,
      directMailForm: {
        ...state?.formData?.directMailForm,
        marketingInformation: {
          ...state.formData.directMailForm.marketingInformation,
          ...payload,
        },
      },
    },
  }
}
export function resetFormData(state, formName: string) {
  return {
    ...state,
    formData: {
      ...state.formData,
      [formName]: store.formData[formName],
    },
  }
}
