import { GlobalState } from 'little-state-machine'

export function getQuoteByID(state: GlobalState, id: string) {
  return state.quoteRequests.find((quote) => id === quote.id)
}
