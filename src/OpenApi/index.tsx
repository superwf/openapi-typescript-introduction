import * as React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import { LinkOutside } from '../LinkOutside'
import { coordinates } from '../coordinate'

import s from './style.module.less'

export const OpenApi = () => {
  return (
    <div className={`step ${s.step}`} {...coordinates.OpenApi}>
      <h1 className="text-center title">Open Api</h1>
      <h2>
        <p>🔗 必要知识: Restful</p>
        <p>📖 概念: 一种使用 JSONSchema 规范，定义Restful接口的规范</p>
        <p>⚙ 作用: 使用 JSONSchema 定义行为一致的，跨语言可用的接口</p>
        <p>
          📜 历史: 主要应用版本V3、<b>V2</b>
        </p>
        <p>
          <LinkOutside href="https://www.openapis.org/">🌐 官网: https://www.openapis.org/ </LinkOutside>
        </p>
        <p className={s.imgBg}>
          <img alt="rest" src="/asset/rest.svg" />
        </p>
        <p>关键概念两点: paths & definitions</p>
        <p>
          <LinkOutside href="https://petstore.swagger.io/">示例工程</LinkOutside>
        </p>
        基础数据结构————definitions
        <SyntaxHighlighter language="json">
          {`
"Pet": {
  "type": "object",
  "required": [
    "name",
    "photoUrls"
  ],
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64"
    },
    "category": {
      "$ref": "#/definitions/Category"
    },
    "name": {
      "type": "string",
      "example": "doggie"
    },
    "photoUrls": {
      "type": "array",
      "xml": {
        "wrapped": true
      },
      "items": {
        "type": "string",
        "xml": {
          "name": "photoUrl"
        }
      }
    }
  }
}`}
        </SyntaxHighlighter>
        请求数据结构———— paths
        <SyntaxHighlighter language="json">
          {`
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
  },
},
"/pet": {
  "put": {
    "parameters": [
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
      "400": {
        "description": "Invalid ID supplied"
      }
    },
  }
}`}
        </SyntaxHighlighter>
        其他一些基础数据，例如:
        <SyntaxHighlighter language="json">
          {`
{
  "host": "petstore.swagger.io",
  "basePath": "/v2",
  ...
}

          `}
        </SyntaxHighlighter>
      </h2>
    </div>
  )
}
