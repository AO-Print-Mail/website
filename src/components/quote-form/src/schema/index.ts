import { callback } from './callback'
import { contactInformationSchema } from './contact-information'
import { directMailSchema } from './direct-mail'
import { fufilmentSchema } from './fulfilment'
import { printSchema } from './printing'

export type QuoteSchema =
  | typeof directMailSchema
  | typeof printSchema
  | typeof callback
  | typeof fufilmentSchema

export const schemas = {
  direct_mail: directMailSchema,
  contact_information: contactInformationSchema,
  quick_callback: callback,
  fulfilment: fufilmentSchema,
  print: printSchema,
  // direct_mail: import('./direct-mail').then((res) => res.directMailSchema),
  // contact_information: import('./contact-information').then(
  //   (res) => res.contactInformationSchema
  // ),
  // quick_callback: import('./callback').then((res) => res.callback),
  // fulfilment: import('./fulfilment').then((res) => res.fufilmentSchema),
  // print: import('./printing').then((res) => res.printSchema),
}
