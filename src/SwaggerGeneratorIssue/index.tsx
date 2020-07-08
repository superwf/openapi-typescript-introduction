import * as React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import { coordinates } from '../coordinate'

import s from './style.module.less'

export const SwaggerGeneratorIssue = () => {
  return (
    <div className={`step ${s.step}`} {...coordinates.SwaggerGeneratorIssue}>
      <h1 className="title text-center color6">Swagger Codegen的一些问题</h1>
      <h2 className="text-center color16"> 😈 Welcome to 真实世界，这里有各种☠️ ☢ ☣💩 👻 💀</h2>
      <h2 className="color2">
        🤨 特殊字符，比如中文等
        <SyntaxHighlighter language="json">
          {`
{
  "abc输出参数": {  // 请求路径或definition定义中带了个中文，代码生成器是翻译呢，还是转成拼音？
    "type": "object",
    "required": ["dueDay", "requestChannel"],
    "properties": {
      "requestChannel": {
        "type": "string"
      }
    }
  },
}

        `}
        </SyntaxHighlighter>
      </h2>
      <h2 className="color2">
        🧐 类型对应丢失
        <SyntaxHighlighter language="json">
          {`
{
  ...
  "$ref": "#/definitions/LostDefinitionVO" // 有引用，没定义
}

        `}
        </SyntaxHighlighter>
      </h2>
      <h2 className="color2">
        🤯 范型解析，范型嵌套，且嵌套时常常也同时混合前两个问题。
        <SyntaxHighlighter language="json">
          {`
{
  ...
  "Result«ReplyVO«Data»»": {
    "type": "object",
    "properties": {
      "description": {
        "type": "string"
      },
      "result": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/ReplyVO«Data»"
        }
      }
    }
  },
}
        `}
        </SyntaxHighlighter>
      </h2>
      <h2 className="color2">
        😵 关键字冲突
        <SyntaxHighlighter language="json">
          {`
{
  ...
  "List": {
    "type": "object",
    "properties": {
      "description": {
        "type": "string"
      },
      "result": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/Map" // 也可能是 Array，List等
        }
      }
    }
  },
}
        `}
        </SyntaxHighlighter>
      </h2>
      <h2 className="color2">
        😭 与实际相悖的错误定义
        <SyntaxHighlighter language="json">
          {`
{
  ...
  "parameters": [
    {
      "in": "body",
      "name": "id",
      "description": "id数组",
      "required": false,
      "schema": {
        "type": "integer",
        "format": "int32"
      } // 事实上这个参数是个integer数组，但定义成了integer
    }
  ]
}
        `}
        </SyntaxHighlighter>
      </h2>

      <h2 className="color10">
        💣 最终结果: 要不就是代码生成器报错，要不生成的代码报错，最可怕的是运行时乃至生产环境报错。
      </h2>
    </div>
  )
}
