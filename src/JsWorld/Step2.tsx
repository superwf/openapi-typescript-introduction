import * as React from 'react'

import stepStyle from '../style/step.module.less'
import { next } from '../helper'

import s from './step2.module.less'

export const JsWorldStep2 = () => {
  return (
    <div
      className={`step ${stepStyle.step}`}
      data-x="10000"
      data-y="600"
      data-z="-800"
      data-rotate-x="140"
      data-scale="4"
    >
      <h1>TypeScript</h1>
      <h2>EcmaScript的子集</h2>
      <p>微软出品，通过在开发时编译校验类型，生成在生产环境运行的EcmaScript。</p>
      <section className={s.process}>
        <div>
          开发时运行
          <br />
          TypeScript环境
        </div>
        <div className={s.arrow}>➡️</div>
        <div>
          校验类型错误
          <br />
          大幅减少Bug
        </div>
      </section>
      <p className={s.car}>🚙💨💨💨💨💨💨💨💨💨</p>
      <section>
        <h3 className="text-center">
          <button type="button" onClick={next}>
            <b>TypeScript</b>
          </button>
        </h3>
      </section>
    </div>
  )
}
