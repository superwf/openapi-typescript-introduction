import * as React from 'react'

import stepStyle from './style/step.module.less'
import { next } from './helper'

export const Ecmascript = () => {
  return (
    <div id="ecmascript" className={`step ${stepStyle.step}`} data-x="5000" data-y="0" data-z="0" data-scale="1">
      <h1>前端语言之主</h1>
      <h2>多年来的即成事实名称: JavaScript</h2>
      <h2>户口本名称: EcmaScript</h2>
      <p>浏览器运行环境唯一语言，没有其他。</p>
      <p>
        如果就这样直接使用<b>Swagger Codegen</b>生成的javascript代码，则是去了90%的好处，就像吃烤肉，到嘴里却都是骨头。
      </p>
      <p>想要类型校验？来上车🚙</p>
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
