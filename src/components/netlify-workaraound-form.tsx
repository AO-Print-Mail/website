export interface NetlifyWorkaroundFormProps {
  formFields: { [k: string]: any }
  name: string
}
import { visuallyHidden } from '@theme/utils/utilityClasses'
import { useStateMachine } from 'little-state-machine'

export const NetlifyWorkaroundForm: React.FC<NetlifyWorkaroundFormProps> = ({
  formFields,
  name,
}) => {
  const {
    state: { userData },
  } = useStateMachine({})
  return (
    <form
      method="POST"
      data-netlify="true"
      name={name}
      aria-hidden="true"
      hidden
      className={visuallyHidden()}
    >
      <input
        type="hidden"
        hidden
        aria-hidden="true"
        name="form-name"
        value={name}
      />
      {Object.entries({ ...formFields, ...userData }).map(([name, value]) => (
        <input
          type="hidden"
          hidden
          aria-hidden="true"
          tabIndex={-1}
          name={name}
          //@ts-ignore
          value={value || ''}
          key={name}
        />
      ))}
    </form>
  )
}
