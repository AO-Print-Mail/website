import { Flex, InputLabel, RadioButton } from '@theme/atoms'
import { ButtonSelectType } from '../types'

export interface ButtonSelectProps extends ButtonSelectType {}

export const ButtonSelect: React.FC<ButtonSelectProps> = ({
  label,
  field_id,
  select_options,
  defaultValue,
  register,
}) => {
  return (
    <>
      <InputLabel as="label" htmlFor={field_id}>
        {label}
      </InputLabel>
      <Flex wrap css={{ mt: '$3', pb: '$3' }}>
        {select_options.map((option) => (
          <RadioButton
            id={option.id}
            name={field_id}
            {...register(field_id)}
            value={option.value || option.label}
            defaultChecked={defaultValue === (option.value || option.label)}
          >
            {option.label}
          </RadioButton>
        ))}
      </Flex>
    </>
  )
}
