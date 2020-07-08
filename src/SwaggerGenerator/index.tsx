import * as React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import { LinkOutside } from '../LinkOutside'
import { coordinates } from '../coordinate'

import s from './style.module.less'

export const SwaggerGenerator = () => {
  return (
    <div {...coordinates.SwaggerGenerator} className={`step ${s.step}`}>
      <h1 className="title color2 text-center">Swagger Codegen</h1>
      <h2 className="color8">
        <p>利用标准OpenApi文档，直接生成各种语言代码的一系列工具。</p>
      </h2>
      <h2>
        <ol>
          <li>
            <LinkOutside href="https://github.com/swagger-api/swagger-codegen">
              🦢 Swagger官网的语言生成器项目
            </LinkOutside>
            ————
            <LinkOutside href="https://github.com/swagger-api/swagger-codegen/tree/master/samples/client/petstore">
              各种语言例子
            </LinkOutside>
          </li>
          <li>
            <p>
              <LinkOutside href="https://github.com/OpenAPITools/openapi-generator">🕊 openapi-generator</LinkOutside>
              ————
              <LinkOutside href="https://github.com/OpenAPITools/openapi-generator/tree/master/samples/client/petstore">
                各种语言例子
              </LinkOutside>
            </p>
          </li>
        </ol>
      </h2>
      <h2 className="color8">
        <p>
          生成的代码中，不止包含数据类型<b className="color12 fontSize1dot2">定义</b>
        </p>
        <p>
          而且包含直接请求对应接口的<b className="color12 fontSize1dot2">函数或方法</b>。
        </p>
        <p>
          通常程序的分层为 <b className="color12 fontSize1dot2">MVC</b>{' '}
          三层，这些从接口自动生成的代码为额外的一个独立层——
          <b className="color12 fontSize1dot2">SERVICE</b> 层
        </p>
        该层代码可被所有层调用，但最佳实践应该只被 <b className="color12 fontSize1dot2">M</b> 层调用。
        <p>调用的例子如下:</p>
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
      </h2>

      <h2 className="color8">
        <p>🛡 对于有类型加持的语言来说，service层生成的请求函数将在开发阶段得到类型验证的保护，避免了整整一类的bug。</p>
        <p>
          🤘
          将生成器执行步骤加入到开发工作流中后，只要我们上游的swagger接口定义有更新，下游开发者可以立即感知，极大的减少沟通成本。
        </p>
        <section className={s.process}>
          前后端对接流程表现为:
          <img alt="deal" src="/asset/1.png" height="200" />
          <img alt="deal" src="/asset/2.png" height="200" />
          <div className={s.compile}>
            更新service代码
            <br />
            编译检查
            <br />
            修正接口<b className="color14">人工介入</b>
          </div>
          <img alt="deal" src="/asset/3.png" height="200" />
        </section>
      </h2>
      <h2 className={`color15 ${s.next}`}>
        <section className="text-center">
          <h3>😏 以上都是美好的想象世界</h3>
        </section>
      </h2>
    </div>
  )
}
