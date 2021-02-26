import { __DEV__ } from '@utils/src'

export const encode = (obj: { [key: string]: any }): string =>
  Object.entries(obj)
    .map(
      ([key, val]) =>
        `${
          typeof val === 'string'
            ? `${encodeURI(key)}=${encodeURI(val)}`
            : val !== null && typeof val === 'object'
            ? `${encode(val)}`
            : ''
        }`,
      ''
    )
    .join('&')

export const serverUrl = __DEV__
  ? 'http://localhost:3000'
  : 'https://your_deployment.server.com'
