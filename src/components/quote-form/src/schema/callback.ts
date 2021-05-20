export const callback = {
  id: 'quick_callback',
  conversion_value: 50,
  service_name: '',
  steps: [
    {
      step_id: 'callback',
      step_title: 'Get a callback',
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
