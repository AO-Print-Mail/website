import { QuoteSchema } from '../schema'

const asyncSchemas = {
  direct_mail: import('../schema/direct-mail').then(
    (res) => res.directMailSchema
  ),
  contact_information: import('../schema/contact-information').then(
    (res) => res.contactInformationSchema
  ),
  quick_callback: import('../schema/callback').then((res) => res.callback),
  fulfilment: import('../schema/fulfilment').then((res) => res.fufilmentSchema),
  print: import('../schema/printing').then((res) => res.printSchema),
}

export async function loadSchema(schemaName: QuoteSchema['id']) {
  return await asyncSchemas[schemaName]
}
