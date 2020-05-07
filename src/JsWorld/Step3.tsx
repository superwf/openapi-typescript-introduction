import * as React from 'react'

import stepStyle from '../style/step.module.less'
import { next } from '../helper'

import s from './step2.module.less'

export const JsWorldStep3 = () => {
  return (
    <div className={`step ${stepStyle.step}`} data-x="5000" data-y="300" data-z="0" data-rotate-x="60" data-scale="1">
      <h1>TypeScript</h1>
      <h2>EcmaScript的子集</h2>
      <p>
        <img
          alt=""
          src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31"
          role="presentation"
          aria-hidden="true"
        />
        微软出品，通过在开发时编译校验类型，生成在生产环境运行的EcmaScript。
      </p>
      <section className={s.process}>
        <div>
          开发时运行
          <br />
          TypeScript环境
        </div>
        <div className={s.arrow}>➡️ </div>
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
