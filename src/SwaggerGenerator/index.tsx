import * as React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import { LinkOutside } from '../LinkOutside'
import { coordinates } from '../coordinate'

import s from './style.module.less'

export const SwaggerGenerator = () => {
  return (
    <div {...coordinates.SwaggerGenerator} className={`step ${s.step}`}>
      <h1 className="title color2 text-center">Swagger Generator</h1>
      <h2 className="color5">
        <p>利用标准OpenApi文档，直接生成各种语言代码的一系列工具。</p>
      </h2>
      <h2>
        <ol>
          <li>
            <LinkOutside href="https://github.com/swagger-api/swagger-codegen">
              🦢 Swagger官网的语言生成器项目
            </LinkOutside>
            <LinkOutside href="https://github.com/swagger-api/swagger-codegen/tree/master/samples/client/petstore">
              各种语言例子
            </LinkOutside>
          </li>
          <li>
            <p>
              <LinkOutside href="https://openapi-generator.tech/">🕊 openapi-generator</LinkOutside>
            </p>
          </li>
        </ol>
      </h2>
      <h2 className="color15">
        <p>生成的代码中，不止包含数据类型定义🛴</p>
        <p>而且包含直接请求对应接口的函数或方法 🚗。</p>
        <p>
          我们通常的分层为 MVC三层，我将这些自动生成的代码称为service层，该层代码可被所有层调用，但最佳实践应该只被 M
          层调用。
        </p>
        <p>调用的例子如下</p>
      </h2>
      <SyntaxHighlighter language="javascript">
        {`
  import { requestPetStatus, requestPetEat } from 'service/pet'

  ...
    const myDog = await requestPetStatus({ query: { name: 'puppy' } })

  if (myDot.weight < 20) {
    await requestPetEat({ body: { id: myDog.id, food: '🍖' }})
  }
  ...
`}
      </SyntaxHighlighter>

      <h2 className="color4">
        <p>🛡 对于有类型加持的语言来说，service层生成的请求函数将在开发阶段得到类型验证的保护，避免了整整一类的bug。</p>
        <p>
          🤘
          将生成器执行步骤加入到开发工作流中后，只要我们上游的swagger接口定义有更新，下游开发者可以立即感知，极大的减少沟通成本。
        </p>
        <section className={s.process}>
          用一个更接地气的的例子说明:
          <img alt="deal" src="/asset/deal.svg" />
        </section>
      </h2>
      <h2 className="color15 hoverBigger">
        <section className="text-center">
          <h3>😏 以上都是美好的想象世界</h3>
        </section>
      </h2>
    </div>
  )
}
