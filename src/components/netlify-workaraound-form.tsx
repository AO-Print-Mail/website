import { visuallyHidden } from '@theme/utils/utilityClasses'
import { store } from '@lib/little-state-machine/store'

export interface NetlifyWorkaroundFormProps {
  formFields: { [k: string]: any }
  name: string
  withUserData?: boolean
}

export const NetlifyWorkaroundForm: React.FC<NetlifyWorkaroundFormProps> = ({
  formFields,
  name,
  withUserData = true,
}) => {
  const fields = withUserData
    ? { ...formFields, ...store.userData }
    : formFields
  return (
    <form
      method="POST"
      data-netlify="true"
      name={name}
      aria-hidden="true"
      netlify-honeypot="bot-field"
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
      {Object.entries(fields).map(([name, value]) => (
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
