import { styled, CSS } from '..'
import { forwardRef } from 'react'
import * as icons from '../icons'

export interface ListProps {
  as?: string
  icon?: React.ReactElement | string
}

export interface listItemProps {
  icon?: React.ReactNode | keyof typeof icons
  iconProps?: {
    css?: CSS
  }
}

export const List = styled('ul', {
  position: 'relative',
  marginLeft: '0',
  listStyle: 'none',
  pl: '0',
  mt: '$2',
  mb: '$5',
})

export const _ListItem = styled('li', {
  display: 'flex',
  variants: {
    mark: {
      enabled: {
        '&::before': {
          alignSelf: 'flex-end',
          color: '$DA70',
          left: '0',
          content: `'•'`,
          fontSize: '1.25em',
          lineHeight: '1',
          textAlign: 'center',
          marginRight: '1em',
          verticalAlign: 'middle',
        },
      },
      disabled: {},
    },
    defaultVariants: {
      mark: 'enabled',
    },
  },
})

export const UnorderedList = forwardRef<HTMLUListElement, ListProps>(
  ({ as, ...props }, ref) => <List role={'list'} ref={ref} as={as} {...props} />
)
export const OrderedList = forwardRef<HTMLUListElement, ListProps>(
  ({ as, ...props }, ref) => (
    <List role={'list'} ref={ref} as={as ?? 'ol'} {...props} />
  )
)
export const ListItem = forwardRef<HTMLUListElement, listItemProps>(
  ({ children, icon, iconProps, ...props }, ref) => {
    const Mark = typeof icon === 'string' ? icons[icon] : icon
    const { css: iconCss, ...iconRest } = iconProps
    return (
      <_ListItem
        mark={Mark ? 'disabled' : 'enabled'}
        role={'list'}
        ref={ref}
        {...props}
      >
        {Mark && (
          <Mark
            {...iconRest}
            css={{
              size: '$2',
              marginRight: '$3',
              alignSelf: 'flex-start',
              flex: '0 0 $2',
              position: 'relative',
              mt: '$4',
              '& + p': {
                flex: '1 1',
              },
              ...iconCss,
            }}
          />
        )}
        {children}
      </_ListItem>
    )
  }
)
