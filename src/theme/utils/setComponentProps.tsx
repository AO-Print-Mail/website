import { StitchesVariants } from '@stitches/react'
import { forwardRef } from 'react'

export function setComponentProps<T>(
  Component: React.FC<any>,
  defaultProps: StitchesVariants<typeof Component>
): React.ForwardRefExoticComponent<
  Pick<any, string | number | symbol> & React.RefAttributes<HTMLHeadingElement>
> {
  //@ts-expect-error
  return forwardRef<T, StitchesVariants<Component>>((componentProps, ref) => (
    <Component ref={ref} {...defaultProps} {...componentProps} />
  ))
}
