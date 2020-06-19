import * as React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import { next } from '../helper'
import { LinkOutside } from '../LinkOutside'

import s from './style.module.less'

export const JSONSchema = () => {
  return (
    <div id="JSONSchema" className={`step ${s.step1}`} data-x="-5000" data-y="0" data-z="0" data-rotate="0">
      <h1>JSON Schema</h1>
      <p>一种以JSON为基础格式的，定义数据结构的规范</p>
      <p>可以被各种编程语言解析，作为跨语言定义数据结构的桥梁</p>
      <p>有多种版本，例如draft4、draft6，目前最新为draft7</p>
      <p>
        <LinkOutside href="http://json-schema.org/">参考官网</LinkOutside>
      </p>
      <h4>例如:</h4>
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
      <h3 className="text-center">
        <button type="button" onClick={next}>
          Next: 接口描述协议: <b>OpenApi</b>
        </button>
      </h3>
    </div>
  )
}
