import * as React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import stepStyle from '../style/step.module.less'
import { LinkOutside } from '../LinkOutside'
import { next } from '../helper'

import s from './style.module.less'

export const SwaggerGenerator = () => {
  return (
    <div
      id="swaggerGenerator"
      className={`step ${stepStyle.step}`}
      data-x="0"
      data-y="0"
      data-z="0"
      data-rotate-x="60"
      data-scale="10"
    >
      <h1>Swagger Generator</h1>
      <p>利用标准OpenApi文档，直接生成各种语言代码的一系列工具。</p>
      <h2>SwaggerCodegen</h2>
      <p>
        <LinkOutside href="https://github.com/swagger-api/swagger-codegen">语言生成器项目</LinkOutside>
        <br />
        <LinkOutside href="https://github.com/swagger-api/swagger-codegen/tree/master/samples/client/petstore">
          各种语言例子
        </LinkOutside>
      </p>
      <h2>openapi-generator</h2>
      <p>
        <LinkOutside href="https://openapi-generator.tech/">项目地址</LinkOutside>
      </p>
      <p>生成的代码中，不止包含数据类型定义🛴</p>
      <p>而且包含直接请求对应接口的函数或方法 🚗。</p>
      <p>对于强类型语言来说，只要接口描述清晰，则生成代码中的调用api请求函数将在开发阶段得到类型验证的支持。</p>
      <section className={s.process}>
        <div>请求参数(🐷)</div>
        <div className={s.arrow1}>➡️</div>
        <div>
          返回数据(🍖)
          <br />
          <br />
          或错误(🐾)
        </div>
      </section>
      <section>
        <h3 className="text-center">
          以上都是美好的世界
          <button type="button" onClick={next}>
            <b>下面进入 ☢ 真实世界☣</b>
          </button>
        </h3>
      </section>
    </div>
  )
}
