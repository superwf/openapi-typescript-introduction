import React from 'react'

import { JSONSchema } from './JSONSchema'
import { OpenApi } from './OpenApi'
import { Swagger } from './Swagger'
import { Ecmascript } from './Ecmascript'
import { Typescript } from './Typescript'
import { SwaggerGenerator } from './SwaggerGenerator'
import { Bridge } from './Bridge'
import { SwaggerGeneratorIssue } from './SwaggerGeneratorIssue'

function App() {
  return (
    <>
      <JSONSchema />
      <OpenApi />
      <Swagger />

      <Ecmascript />
      <Typescript />

      <Bridge />
      <SwaggerGenerator />
      <SwaggerGeneratorIssue />
    </>
  )
}

export default App
