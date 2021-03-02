import { cloneElement } from 'react'
import { Icon, IconProps } from './icon'

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
  displayName: string
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
  viewBox,
  d,
  path,
  displayName,
  defaultProps,
}: CreateIconOptions) {
  const Comp: React.FC<IconProps> = ({ children, ...props }) => {
    const _props = Object.assign({}, { ...defaultProps, displayName }, props)
    return (
      //@ts-ignore
      <Icon viewBox={viewBox} {..._props}>
        {path ?? makePaths(d) ?? children}
      </Icon>
    )
  }
  return Comp
}
