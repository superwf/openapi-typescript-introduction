import * as React from 'react'

import stepStyle from '../style/step.module.less'

import s from './style.module.less'

export const Typescript = () => {
  return (
    <div
      id="typescript"
      className={`step ${stepStyle.step}`}
      data-x="5000"
      data-y="300"
      data-z="0"
      data-rotate-x="60"
      data-scale="1"
    >
      <h1>TypeScript</h1>
      <h2>EcmaScript的子集</h2>
      <p>
        <img
          alt=""
          src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31"
          role="presentation"
          aria-hidden="true"
          className={s.microsoftLogo}
        />
        出品，通过在开发时引入一层类型校验环境，最终生成在生产环境运行的EcmaScript。
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
        <h4 className="text-center">主要类型</h4>
        string、boolean、number、interface、function signature、enum。
      </section>
    </div>
  )
}
