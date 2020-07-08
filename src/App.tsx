import * as React from 'react'

import { Title } from './Title'
import { Preface } from './Preface'
import { JSONSchema } from './JSONSchema'
import { OpenApi } from './OpenApi'
import { Swagger } from './Swagger'
import { SwaggerGenerator } from './SwaggerGenerator'
import { Overview } from './Overview'
import { TsGear } from './TsGear'
import { SwaggerGeneratorIssue } from './SwaggerGeneratorIssue'

export const App = () => {
  return (
    <>
      <Title />
      <Preface />
      <JSONSchema />
      <OpenApi />
      <Swagger />
      <SwaggerGenerator />
      <SwaggerGeneratorIssue />
      <TsGear />
      <Overview />
    </>
  )
}
