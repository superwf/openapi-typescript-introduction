import * as React from 'react'

import { Preface } from './Preface'
import { JSONSchema } from './JSONSchema'
import { OpenApi } from './OpenApi'
import { Swagger } from './Swagger'
import { Ecmascript } from './Ecmascript'
import { Typescript } from './Typescript'
import { SwaggerGenerator } from './SwaggerGenerator'
import { Bridge } from './Bridge'
import { SwaggerGeneratorIssue } from './SwaggerGeneratorIssue'

export const App = () => {
  return (
    <>
      <Preface />
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
