import * as React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import stepStyle from '../style/step.module.less'
import { next } from '../helper'

import s from './style.module.less'

export const SwaggerGeneratorIssue = () => {
  return (
    <div
      id="swaggerCodegenIssue"
      className={`step ${stepStyle.step} ${s.step5}`}
      data-x="0"
      data-y="0"
      data-z="0"
      data-rotate-x="-30"
      data-scale="10"
    >
      <h1 className="text-center">真实世界</h1>
      <h2>👻 特殊字符，比如中文等</h2>
      <SyntaxHighlighter language="json">
        {`
{
  "abc输出参数": {
    "type": "object",
    "required": ["dueDay", "requestChannel"],
    "properties": {
      "requestChannel": {
        "type": "string",
        "description": "进件渠道"
      }
    }
  },
}

        `}
      </SyntaxHighlighter>
      <h2>🧐 类型对应丢失</h2>
      <SyntaxHighlighter language="json">
        {`
{
  ...
  "$ref": "#/definitions/LostDefinitionVO"
}

        `}
      </SyntaxHighlighter>
      <h2>🚳🚭📵🔞 关键字冲突与错误泛型</h2>
      <SyntaxHighlighter language="json">
        {`
{
  ...
  "Result«List«Map»»": {
    "type": "object",
    "properties": {
      "description": {
        "type": "string"
      },
      "result": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/Map"
        }
      }
    }
  },
}
        `}
      </SyntaxHighlighter>
      <section>
        <h3 className="text-center">
          解决工具
          <button type="button" onClick={next}>
            <b>ts-gear</b>
          </button>
        </h3>
      </section>
    </div>
  )
}
