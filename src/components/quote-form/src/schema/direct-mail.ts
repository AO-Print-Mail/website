import { Schema } from '../types/schemaTypes'

export const directMailSchema: Schema = {
  id: 'mail',
  steps: [
    {
      step_id: 'mail_format',
      step_type: 'step',
      step_title: 'What format would you like to send?',
      mandatory: false,
      fields: [
        {
          field_type: 'button_select',
          display: 'row_wrap',
          field_id: 'mail_format',
          format: 'string',
          label: 'Choose a format',
          defaultValue: '(not provided)',
          select_options: [
            { label: 'Flyers', id: 'flyers' },
            { label: 'Letters', id: 'letters' },
            { label: 'Postcards', id: 'postcards' },
            { label: 'Brochures', id: 'brochures' },
            { label: 'Invoices/Bills', id: 'invoices' },
            { label: 'Reports', id: 'reports' },
            { label: 'Plastic wrapped items', id: 'plastic_wrap' },
            { label: 'Art', id: 'art' },
            { label: 'Magazines', id: 'magazines' },
            { label: 'Product Samples', id: 'product_samples' },
            { label: 'Retail/eCommerce Products', id: 'products' },
            { label: 'Books', id: 'books' },
            { label: 'Something else', id: 'other' },
          ],
        },
      ],
    },
    {
      step_id: 'delivery_type',
      step_type: 'step',
      step_title: 'How will your mail be delivered?',
      mandatory: false,
      fields: [
        {
          field_type: 'button_select',
          display: 'row_wrap',
          field_id: 'delivery_type',
          format: 'string',
          label: 'Choose a delivery type',
          defaultValue: '(not provided)',
          select_options: [
            { label: 'Addressed/Bulk Mail', id: 'addressed' },
            { label: 'Unaddressed Mail', id: 'unaddressed' },
            { label: 'Unsure/Other', id: 'other' },
          ],
        },
      ],
    },
    {
      step_id: 'mail_quantity',
      step_type: 'step',
      step_title: 'How many are you sending?',
      mandatory: false,
      fields: [
        {
          field_type: 'input',
          field_id: 'mail_quantity',
          format: 'number',
          label: 'Enter an exact quanitity',
          input_type: 'number',
          pattern: '[0-9]*',
          auto_complete_field: {
            field_type: 'button_select',
            field_id: 'popular_quantities',
            display: 'row_wrap',
            label: 'Or, choose a popular quanitity',
            placeholder: '1000',
            text_mask: '',
            select_options: [
              { label: '500', value: 500, id: '500' },
              { label: '1000', value: 1000, id: '1000' },
              { label: '2000', value: 2000, id: '2000' },
              { label: '5k', value: 5000, id: '5000' },
              { label: '10k', value: 10000, id: '10000' },
              { label: '20k', value: 20000, id: '20000' },
            ],
          },
        },
      ],
    },
    {
      step_id: 'deadline',
      step_type: 'step',
      step_title: 'When do you need it delivered by?',
      fields: [
        {
          field_type: 'button_select',
          display: 'row_wrap',
          field_id: 'deadline',
          format: 'string',
          label: 'Choose an option',
          defaultValue: '(not provided)',
          select_options: [
            { label: 'No deadline yet', id: 'none' },
            { label: '3 weeks or more', id: '3_weeks' },
            { label: '2 weeks or more', id: '2_weeks' },
            { label: 'Next week', id: 'next_week' },
            { label: 'Urgently!', id: 'urgently' },
          ],
        },
      ],
    },
    {
      step_id: 'mail_service',
      step_type: 'step',
      step_title: 'Do you require printing?',
      mandatory: false,
      fields: [
        {
          field_type: 'button_select',
          display: 'row_wrap',
          field_id: 'mail_service',
          format: 'string',
          label: 'Please choose a service',
          defaultValue: '(not provided)',
          select_options: [
            { label: 'Print & Mail', id: 'print_mail' },
            { label: 'Mail only', id: 'mail' },
            { label: 'Unsure', value: 'Print & Mail', id: 'unsure' },
          ],
        },
      ],
    },
    { schema_id: 'contact_information', step_type: 'link' },
    {
      step_id: 'additional_information',
      step_type: 'step',
      step_title: 'Additional information',
      mandatory: false,
      fields: [
        {
          field_type: 'textarea',
          field_id: 'additional_information',
          format: 'string',
          label: 'Your brief',
          defaultValue: '(not provided)',
          placeholder:
            'Please include any information or requirements that will help us to prepare your quote in an accurate and timely manner.',
        },
      ],
    },
  ],
  success_title: 'Request sent!',
  success_description:
    'Thanks for requesting a quote for our mail services. Our team is reviewing your requirements and will be in touch with you very soon!',
}
