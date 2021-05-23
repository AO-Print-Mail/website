import { UseFormRegister } from 'react-hook-form'

export interface ButtonSelectType extends InputType {
  field_type: 'button_select'
  display?: string
  select_options: Option[]
}

export interface InputType {
  field_type: string
  field_id: string
  format: 'string'
  label: string
  register?: UseFormRegister<any>
  defaultValue?: string
}

interface Option {
  label: string
  value?: string
  id: string
}
