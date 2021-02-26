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
