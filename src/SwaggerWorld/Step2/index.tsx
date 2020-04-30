import * as React from 'react'

import stepStyle from '../../style/step.module.less'
import { LinkOutside } from '../../LinkOutside'
import { next } from '../../helper'

import s from './style.module.less'

export const SwaggerWorldStep2 = () => {
  return (
    <div
      className={`step ${stepStyle.step} ${s.step2}`}
      data-x="-4500"
      data-y="0"
      data-z="-700"
      data-rotate-y="80"
      data-scale="4"
    >
      <h1>Open Api</h1>
      <section>一种使用JSON Schema规范，定义Restful接口的规范</section>
      <p>
        <LinkOutside href="https://www.openapis.org/">参考官网</LinkOutside>
      </p>
      <p>
        主要应用版本V3、<b>V2</b>
      </p>
      <p>
        该协议的杀手级应用
        <span role="img" aria-label="next">
          🎊🎉🎊🎉🎊🎉🎊🎉
        </span>
      </p>
      <section>
        <h3 className="text-center">
          <button type="button" onClick={next}>
            Swagger
          </button>
        </h3>
      </section>
    </div>
  )
}
