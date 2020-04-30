import * as React from 'react'

import stepStyle from '../style/step.module.less'

import s from './style.module.less'

export const BridgeStep1 = () => {
  return (
    <div className={`step ${stepStyle.step}`} data-x="3000" data-y="0" data-z="0" data-scale="10">
      <div className={s.swaggerWrold}>S</div>
      <div className={s.gear}>⚙</div>
      <div className={s.jsWorld}>J</div>
    </div>
  )
}
