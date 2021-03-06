import * as React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import { LinkOutside } from '../LinkOutside'
import { coordinates } from '../coordinate'
import { assetPath } from '../assetPath'

import s from './style.module.less'

export const OpenApi = () => {
  return (
    <div className={`step ${s.step}`} {...coordinates.OpenApi}>
      <h1 className="text-center title color7">Open Api</h1>
      <h2 className="color16">
        <p>ð å¿è¦ç¥è¯: Restful</p>
        <p>ð æ¦å¿µ: ä¸ç§ä½¿ç¨ JSONSchema å®ä¹Restfulæ¥å£çè§èã</p>
        <p>
          â ä½ç¨: ä½¿ç¨ JSONSchema æè¿°<b className="color12 fontSize1dot2">è·¨è¯­è¨</b>å¯ç¨ç
          <b className="color12 fontSize1dot2">æ°æ®ç»æä¸æ¥å£</b>å®ä¹ã
        </p>
        <p>
          ð åå²: ä¸»è¦åºç¨çæ¬<b>v2ãv3</b>ï¼ç®åææ°çæ¬ä¸º3.0.3
        </p>
        <p>
          <LinkOutside href="https://www.openapis.org/">ð å®ç½: https://www.openapis.org/ </LinkOutside>
        </p>
        <p className={s.imgBg}>
          <img alt="rest" src={assetPath('/asset/rest.svg')} />
        </p>
        <p>
          å³é®æ¦å¿µä¸¤ç¹: <b className="fontSize1dot2 color12">paths & definitions</b>
        </p>
        åºç¡æ°æ®ç»æââââ<b className="fontSize1dot2 color12">definitions</b>
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
        è¯·æ±æ°æ®ç»æââââ <b className="fontSize1dot2 color12">paths</b>
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
        å¶ä»ä¸äºåºç¡æ°æ®ï¼ä¾å¦:
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
