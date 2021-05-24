//belongs outside in the layout somewhere
export function validateStepQuery(query): string | false {
  if (!query || !query['quote'] || !query['service']) {
    return false
  }
  const { step, service } = query
}
