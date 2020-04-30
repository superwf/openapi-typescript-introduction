import * as React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

export const Step1 = () => {
  return (
    <div className="step border-circle" data-x="-1000" data-y="0" data-z="-500" data-scale="2">
      <h2>JSON Schema</h2>
      <section>一种定义语言</section>
      <SyntaxHighlighter language="javascript">
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
    </div>
  )
}
