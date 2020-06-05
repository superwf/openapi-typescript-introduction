import * as React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import stepStyle from '../style/step.module.less'
import { LinkOutside } from '../LinkOutside'
import { next } from '../helper'

import s from './style.module.less'

export const OpenApi = () => {
  return (
    <div
      id="openApi"
      className={`step ${stepStyle.step} ${s.stepWrapper}`}
      data-x="-5000"
      data-y="-300"
      data-z="0"
      data-rotate-x="60"
    >
      <h1>Open Api</h1>
      <section>一种使用JSON Schema规范，定义Restful接口的规范</section>
      <p>
        <LinkOutside href="https://www.openapis.org/">参考官网</LinkOutside>
      </p>
      <p>
        主要应用版本V3、<b>V2</b>
      </p>
      <h3>关键概念两点: paths & definitions</h3>
      <p>
        <LinkOutside href="https://petstore.swagger.io/">示例工程</LinkOutside>
      </p>
      <h4>paths</h4>
      <SyntaxHighlighter language="json">
        {`
"/pet": {
  "post": {
    "parameters": [
      {
        "in": "body",
        "name": "body",
        "description": "Pet object that needs to be added to the store",
        "required": true,
        "schema": {
          "$ref": "#/definitions/Pet"
        }
      }
    ],
    "responses": {
      "405": {
        "description": "Invalid input"
      }
    },
  },
  "put": {
    "parameters": [
      {
        "in": "body",
        "name": "body",
        "description": "Pet object that needs to be added to the store",
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
      <h4>definitions</h4>
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
      <section>
        <p>
          该协议的杀手级应用如下:
          <span role="img" aria-label="next">
            ↘️↘️↘️↘️↘️⬇️⬇️⬇️↙️↙️↙️↙️↙️
          </span>
        </p>
        <h3 className="text-center">
          <button type="button" onClick={next}>
            Swagger
          </button>
        </h3>
      </section>
    </div>
  )
}
