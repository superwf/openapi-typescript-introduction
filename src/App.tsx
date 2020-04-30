import React from 'react'

import { SwaggerWorldStep1 } from './SwaggerWorld/Step1'
import { SwaggerWorldStep2 } from './SwaggerWorld/Step2'
import { SwaggerWorldStep3 } from './SwaggerWorld/Step3'
import { SwaggerWorldStep4 } from './SwaggerWorld/Step4'
import { SwaggerWorldStep5 } from './SwaggerWorld/Step5'
import { JsWorldStep1 } from './JsWorld/Step1'
import { JsWorldStep2 } from './JsWorld/Step2'
import { BridgeStep1 } from './Bridge/Step1'

function App() {
  return (
    <>
      <SwaggerWorldStep1 />
      <SwaggerWorldStep2 />
      <SwaggerWorldStep3 />
      <SwaggerWorldStep4 />
      <SwaggerWorldStep5 />

      <JsWorldStep1 />
      <JsWorldStep2 />
      <BridgeStep1 />
    </>
  )
}

export default App
