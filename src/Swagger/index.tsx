import * as React from 'react'

import stepStyle from '../style/step.module.less'
import { LinkOutside } from '../LinkOutside'
import { next } from '../helper'

// import s from './style.module.less'

export const Swagger = () => {
  return (
    <div id="swagger" className={`step ${stepStyle.step}`} data-x="-5000" data-y="300" data-z="0" data-rotate-x="-60">
      <h1>Swagger</h1>
      <p>使用Open Api作为标准的实际Api开发应用</p>
      <p>各种主流语言都有其一系列工具链的实现，例如: java、nodejs、golang等</p>
      <p>
        <LinkOutside href="https://swagger.io/">参考官网</LinkOutside>
      </p>
      <p>
        工具链包括 <b>Swagger Editor</b>，<b>Swagger UI</b>
      </p>
      <section>
        <h3 className="text-center">
          <button type="button" onClick={next}>
            <b>Swagger Codegen</b>
          </button>
        </h3>
      </section>
    </div>
  )
}
