import * as React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import stepStyle from '../../style/step.module.less'
import { next } from '../../helper'

import s from './style.module.less'

export const SwaggerWorldStep5 = () => {
  return (
    <div
      className={`step ${stepStyle.step} ${s.step5}`}
      data-x="-3600"
      data-y="900"
      data-z="-2400"
      data-rotate-x="190"
      data-scale="1"
    >
      <h1>真实世界</h1>
      <h2>🕷 各种特殊字符，中文</h2>
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
      <h2>🚳🚭📵🔞 各种关键字冲突与错误泛型</h2>
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
          下面来逛逛前端的地盘
          <button type="button" onClick={next}>
            <b>JavaScript</b>
          </button>
        </h3>
      </section>
    </div>
  )
}
