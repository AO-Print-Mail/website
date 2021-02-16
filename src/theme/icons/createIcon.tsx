import { forwardRef } from 'react'
import { Icon, IconProps } from './icon'
import { CSS, StitchesComponent } from '@theme'

interface CreateIconOptions {
  /**
   * The icon `svg` viewBox
   * @default "0 0 24 24"
   */
  viewBox?: string
  /**
   * The `svg` path or group element
   * @type React.ReactElement | React.ReactElement[]
   */
  path?: React.ReactElement | React.ReactElement[]
  /**
   * If the has a single path, simply copy the path's `d` attribute
   */
  d?: string
  /**
   * The display name useful in the dev tools
   */
  displayName?: string
  /**
   * Default props automatically passed to the component; overwriteable
   */
  defaultProps?: IconProps
  /**
   * Styles for the surrounding svg element
   */
}

const makePaths = (
  d: string | string[]
): React.ReactElement | React.ReactElement[] => {
  if (Array.isArray(d)) {
    return d.map((path) => <path fill="currentColor" d={path} />)
  }
  return <path fill="currentColor" d={d} />
}

export function createIcon({
  displayName,
  viewBox,
  d,
  path,
  defaultProps = {},
}: CreateIconOptions): React.FC<IconProps> {
  const Comp: React.FC<IconProps> = ({ children, ...props }) => {
    return (
      //@ts-ignore
      <Icon viewBox={viewBox} {...defaultProps} {...props} size={props.size}>
        {path ?? makePaths(d)}
      </Icon>
    )
  }

  return Comp
}
