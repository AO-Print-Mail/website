export interface NetlifyWorkaroundFormProps {
  formData: { [k: string]: any }
}
import { classes } from '@theme'

export const NetlifyWorkaroundForm: React.FC<NetlifyWorkaroundFormProps> = ({
  formData,
}) => {
  return (
    <form
      method="POST"
      data-netlify="true"
      name="directMailForm"
      aria-hidden="true"
      hidden
      className={classes.visuallyHidden()}
    >
      <input
        type="hidden"
        hidden
        aria-hidden="true"
        name="form-name"
        value="directMailForm"
      />
      {Object.entries(formData).map(([name, value]) => (
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
