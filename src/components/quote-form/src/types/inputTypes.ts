import { UseFormRegister } from 'react-hook-form'

export type Field = ButtonSelectType | InputType

export interface ButtonSelectType extends InputType {
  field_type: 'button_select'
  display?: string
  select_options: Option[]
}

export interface InputType {
  field_type: string
  field_id: string
  format?: 'string' | 'phone' | 'email' | 'number'
  input_type?: 'email' | 'tel' | 'number'
  pattern?: string | RegExp
  label: string
  register?: UseFormRegister<any>
  defaultValue?: string
  required?: boolean
  placeholder?: string
  default?: string
  display?: string
  auto_complete_field?: Field
  text_mask?: string
}

interface Option {
  label: string
  value?: string | number
  id: string
}
