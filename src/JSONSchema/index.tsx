import * as React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import { LinkOutside } from '../LinkOutside'
import { coordinates } from '../coordinate'

import s from './style.module.less'

export const JSONSchema = () => {
  return (
    <div className={`step ${s.step}`} {...coordinates.JSONSchema}>
      <h1 className="text-center title color12">JSON Schema</h1>
      <h2 className="color8">
        <p>🔗 必要知识: JSON</p>
        <p>📖 概念: 一种以JSON为基础格式的，定义数据结构的规范</p>
        <p>⚙ 作用: 可以被各种编程语言解析，作为跨语言传递数据结构的桥梁</p>
        <p>📜 历史: 有多种版本，例如draft4、draft6，目前最新为 2019-09</p>
        <p>
          <LinkOutside href="https://json-schema.org/"> 🌐 官网 https://json-schema.org/</LinkOutside>
        </p>
      </h2>
      <h2 className="color8">
        例如，我们需要描述一个数据结构:
        <SyntaxHighlighter language="typescript">
          {`
  interface ApiResponse {
    code: number
    type: string
    message: string
  }
`}
        </SyntaxHighlighter>
        对应的JSONSchema描述:
        <SyntaxHighlighter language="json">
          {`
  {
    "ApiResponse": {
      "type": "object",
      "properties": {
        "code": {
          "type": "integer",
          "format": "int32"
        },
        "type": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  }
`}
        </SyntaxHighlighter>
      </h2>
    </div>
  )
}
