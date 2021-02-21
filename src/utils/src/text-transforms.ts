import unified from 'unified'
//const stream = require('unified-stream')
import markdown from 'remark-parse'
import raw from 'rehype-raw'
import remark2rehype from 'remark-rehype'
import html from 'rehype-stringify'
import parse5 from 'parse5'
import { parse5ToStructuredText } from 'datocms-html-to-structured-text'
import { resolve } from 'path'
export type { ThenArg } from '@utils/src/types.ts'
const processor = unified().use(markdown).use(remark2rehype).use(raw).use(html)

export const markdownToHtml = async (md: string): Promise<string | void> => {
  const result = await processor.process(md).then((res) => res.toString())
  return result
}

export const htmlToDast = async (html) =>
  parse5ToStructuredText(
    parse5.parse(html, {
      sourceCodeLocationInfo: true,
    })
  ).then((res) => res)

export const markdownToDast = async (md: string) => {
  const html = await markdownToHtml(md).then((res) => res)
  const dast = await htmlToDast(html).then((res) => res)
  return dast
}
