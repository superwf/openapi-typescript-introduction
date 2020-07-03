import * as React from 'react'

import { Preface } from './Preface'
import { JSONSchema } from './JSONSchema'
import { OpenApi } from './OpenApi'
import { Swagger } from './Swagger'
import { SwaggerGenerator } from './SwaggerGenerator'
import { End } from './End'
import { TsGear } from './TsGear'
import { SwaggerGeneratorIssue } from './SwaggerGeneratorIssue'

export const App = () => {
  return (
    <>
      <Preface />
      <JSONSchema />
      <OpenApi />
      <Swagger />
      <SwaggerGenerator />
      <SwaggerGeneratorIssue />
      <TsGear />
      <End />
    </>
  )
}
