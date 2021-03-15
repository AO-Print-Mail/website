const fieldNameLookup = {
  mailFormat: 'format',
  services: 'what_services_do_you_require_',
  itemQuantity: 'how_many_units_',
  frequency: '',
  urgency: 'project_urgency',
  artworkReady: 'artwork_ready_',
  addressDataReady: 'data_file_ready_',
  additionalInformation: 'message',
  firstName: 'firstname',
  lastName: 'lastname',
  companyName: 'company',
  country: 'country',
  attachment: 'attachment',
  email: 'email',
  phone: '', //NEED TO DO THE LOGIC ON THE PHONE FIELD
  joinMailingList: 'join_mailing_list',
  gclid: '',
}

const contextNameLookup = {
  hutk: 'hutk',
  ipAddress: 'ipAddress',
  pageName: 'pageName',
  pageUri: 'pageUri',
  submittedAt: 'submittedAt',
}
import { APIGatewayEvent, Context } from 'aws-lambda'

export async function handler(event: APIGatewayEvent, context: Context) {
  const { msg } = event.queryStringParameters

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ msg }),
  }
}
