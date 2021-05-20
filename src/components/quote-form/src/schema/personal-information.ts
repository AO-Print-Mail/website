export const personalInformationSchema = {
  id: 'personal_information',
  conversion_value: 0,
  service_name: '',
  steps: [
    {
      step_id: 'name',
      step_title: 'Please enter your name',
      mandatory: true,
      fields: [
        {
          field_type: 'input',
          required: true,
          format: 'string',
          label: 'First name',
          placeholder: 'Jane',
          default: '',
          display: 'inline',
        },
        {
          field_type: 'input',
          required: false,
          format: 'string',
          label: 'Last name',
          placeholder: 'Appleseed',
          default: '',
          display: 'inline',
        },
      ],
    },
    {
      step_id: 'preferred-contact',
      step_title: 'How should we contact you?',
      mandatory: true,
      fields: [
        {
          field_type: 'button-select',
          display: 'row-wrap',
          field_id: 'preferred-contact',
          default: '',
          format: 'string',
          label: 'Choose a preferred contact method',
          select_options: [
            { label: 'Phone', value: 'phone' },
            { label: 'Email', value: 'email' },
          ],
        },
      ],
      notes:
        'Our team will contact you via your preferred contact method to ensure we understand your requirements properly',
      next_step: [
        { field_id: 'preferred-contact', value: 'phone', target: 'phone' },
        { field_id: 'preferred-contact', value: 'email', target: 'email' },
      ],
    },
    {
      step_id: 'email',
      step_title: 'Email address',
      mandatory: true,
      skip: true,
      fields: [
        {
          field_type: 'input',
          field_id: 'email',
          default: '',
          format: 'email',
          label: 'Please enter an email address',
          placeholder: 'jane@example.com',
        },
      ],
    },
    {
      step_id: 'phone',
      step_title: 'Telephone number',
      mandatory: true,
      skip: true,
      fields: [
        {
          field_type: 'input',
          field_id: 'email',
          default: '',
          format: 'phone',
          label: 'Please enter your phone number',
          placeholder: '04xx xxx xxx',
        },
      ],
    },
  ],
}
