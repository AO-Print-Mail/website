import { __DEV__ } from '@utils/src'

export const encode = (obj: { [key: string]: any }): string =>
  Object.entries(obj)
    .map(
      ([key, val]) =>
        `${
          typeof val === 'string'
            ? encodeURIComponent(`${key}=${val}`)
            : val !== null && typeof val === 'object'
            ? `${encode(val)}`
            : ''
        }`,
      ''
    )
    .join('&')

export const serverUrl =
  __DEV__ && !process.env.NETLIFY
    ? 'http://localhost:3000'
    : 'https://www.aomail.com.au'
