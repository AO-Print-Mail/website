import unified from 'unified'
//const stream = require('unified-stream')
import markdown from 'remark-parse'
import raw from 'rehype-raw'
import remark2rehype from 'remark-rehype'
import html from 'rehype-stringify'
import report from 'vfile-reporter'
import parse5 from 'parse5'
import { parse5ToStructuredText } from 'datocms-html-to-structured-text'
import { resolve } from 'path'

const processor = unified().use(markdown).use(remark2rehype).use(raw).use(html)

export const markdownToHtml = async (md: string): Promise<string | void> => {
  const result = await processor.process(md).then((res) => res.toString())
  return result
}

export const htmlToDast = (html) =>
  parse5ToStructuredText(
    parse5.parse(html, {
      sourceCodeLocationInfo: true,
    })
  ).then(
    (res) => res.toString(),
    (err) => console.error(err)
  )

export const markdownToDast = (md: string) => {
  const html = markdownToHtml(md).then((res) => res)
  return htmlToDast(html)
}
