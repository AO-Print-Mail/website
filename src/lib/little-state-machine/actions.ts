import { GlobalState } from 'little-state-machine'
import { store } from './store'
import { QuoteFormInputData } from '@components/landing-page-quote-form'

export function updateDirectMailForm(
  state: GlobalState,
  payload: QuoteFormInputData
): GlobalState {
  return {
    ...state,
    formData: {
      ...state?.formData,
      directMailForm: {
        ...state?.formData?.directMailForm,
        ...payload,
      },
    },
  }
}
export function updateFeedbackFormForm(
  state: GlobalState,
  payload: QuoteFormInputData
): GlobalState {
  return {
    ...state,
    formData: {
      ...state?.formData,
      feedbackForm: {
        ...state?.formData?.feedbackForm,
        ...payload,
      },
    },
  }
}
export function resetFormData(
  state: GlobalState,
  formName: string
): GlobalState {
  return {
    ...state,
    formData: {
      ...state.formData,
      [formName]: store.formData[formName],
    },
  }
}

export function updateUserData(state: GlobalState, payload): GlobalState {
  return { ...state, userData: { ...state.userData, ...payload } }
}

export function createQuote(state: GlobalState, payload): GlobalState {
  return { ...state, quoteRequests: [...state.quoteRequests, payload] }
}

//export function updateQuote(state: GlobalState, payload): GlobalState {}
