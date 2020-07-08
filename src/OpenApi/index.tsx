import * as React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import { LinkOutside } from '../LinkOutside'
import { coordinates } from '../coordinate'

import s from './style.module.less'

export const OpenApi = () => {
  return (
    <div className={`step ${s.step}`} {...coordinates.OpenApi}>
      <h1 className="text-center title color7">Open Api</h1>
      <h2 className="color16">
        <p>🔗 必要知识: Restful</p>
        <p>📖 概念: 一种使用 JSONSchema 定义Restful接口的规范。</p>
        <p>
          ⚙ 作用: 使用 JSONSchema 描述<b className="color12 fontSize1dot2">跨语言</b>可用的
          <b className="color12 fontSize1dot2">数据结构与接口</b>定义。
        </p>
        <p>
          📜 历史: 主要应用版本<b>v2、v3</b>，目前最新版本为3.0.3
        </p>
        <p>
          <LinkOutside href="https://www.openapis.org/">🌐 官网: https://www.openapis.org/ </LinkOutside>
        </p>
        <p className={s.imgBg}>
          <img alt="rest" src="/asset/rest.svg" />
        </p>
        <p>
          关键概念两点: <b className="fontSize1dot2 color12">paths & definitions</b>
        </p>
        基础数据结构————<b className="fontSize1dot2 color12">definitions</b>
        <SyntaxHighlighter language="json">
          {`
  "Pet": {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "format": "int64"
      },
      "name": {
        "type": "string",
        "example": "doggie"
      },
      "photoUrls": {
        "type": "array"
      }
    }
  }`}
        </SyntaxHighlighter>
        请求数据结构———— <b className="fontSize1dot2 color12">paths</b>
        <SyntaxHighlighter language="json">
          {`
"/pet/findByStatus": {
  "get": {
    "parameters": [
      {
        "name": "status",
        "in": "query",
        "required": true,
        "type": "array",
        "items": {
          "type": "string",
          "enum": [
            "available",
            "pending",
            "sold"
          ],
          "default": "available"
        },
        "collectionFormat": "multi"
      },
      {
        "in": "body",
        "name": "body",
        "required": true,
        "schema": {
          "$ref": "#/definitions/Pet"
        }
      }
    ],
    "responses": {
      "200": {
        "schema": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Pet"
          }
        }
      },
      "400": {
        "description": "Invalid ID supplied"
      }
    },
  },
  }`}
        </SyntaxHighlighter>
        其他一些基础数据，例如:
        <SyntaxHighlighter language="json">
          {`
  {
    "host": "petstore.swagger.io",
    "basePath": "/v2",
    "schemes": [
      "https",
      "http"
    ],
  }

          `}
        </SyntaxHighlighter>
      </h2>
    </div>
  )
}
