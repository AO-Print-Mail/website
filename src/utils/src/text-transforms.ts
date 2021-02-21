import unified from 'unified'
import { findAll } from 'unist-utils-core'
import markdown from 'remark-parse'
import raw from 'rehype-raw'
import remark2rehype from 'remark-rehype'
import html from 'rehype-stringify'
import parse5 from 'parse5'
import { parse5ToStructuredText } from 'datocms-html-to-structured-text'
export type { ThenArg } from '@utils/src/types.ts'
var gfm = require('remark-gfm')
var breaks = require('remark-breaks')
const processor = unified()
  .use(markdown)
  .use(gfm)
  .use(breaks)
  .use(remark2rehype, { allowDangerousHtml: true })
  .use(raw)
  .use(html)

export const markdownToHtml = async (md: string): Promise<string | void> => {
  const result = await processor.process(md).then((res) => res.toString())
  return result
}

export const htmlToDast = async (html) => {
  return parse5ToStructuredText(
    parse5.parse(html, {
      sourceCodeLocationInfo: true,
    }),
    {
      preprocess: (tree) => {
        //@ts-ignore
        findAll(tree, (node) => {
          if (node.type === 'element' && node.tagName === 'del') {
            node.tagName = 's'
          }
        })
      },
      newlines: true,
    }
  ).then((res) => res)
}

export const markdownToDast = async (md: string) => {
  const html = await markdownToHtml(md).then((res) => res)
  const dast = await htmlToDast(html).then((res) => res)
  return dast
}
