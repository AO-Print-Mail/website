import dynamic from 'next/dynamic'

export const loadField = (type: string) =>
  ({
    button_select: dynamic(
      import('../components/buttonSelect').then((res) => res.ButtonSelect)
    ),
    input: null,
    textarea: null,
  }[type])
