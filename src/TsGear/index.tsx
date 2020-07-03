import * as React from 'react'

import { coordinates } from '../coordinate'
import { LinkOutside } from '../LinkOutside'

import s from './style.module.less'

export const TsGear: React.FC = () => {
  return (
    <div className={`${s.step} step`} {...coordinates.TsGear}>
      <h1 className="title text-center color11">前端实践</h1>
      <h2 className="color7">
        在Javascript环境，可直接使用官方的<b>swagger-codegen</b>，或者<b>openapi-generator</b>生成service层代码。
      </h2>
      <h2 className="color9">
        在Typescript环境，除了官方的工具之外，还有几个推荐的第三方工具
        <ul>
          <li>
            <LinkOutside href="https://github.com/cellular/oazapfts">oazapfts</LinkOutside>
            ，使用typescript语法树生成代码
          </li>
          <li>
            <LinkOutside href="https://github.com/superwf/ts-gear">ts-gear</LinkOutside>
            我组项目采用该工具，主要针对上述的一些swagger定义错误问题(中文问题和错误类型定义除外)，尽最大可能生成可用的service代码。
            在减少了很多请求层代码的编写工作的同时，为前后端数据类型传递提供了一个强校验机制，使两个环境像齿轮一样对接运行。
          </li>
        </ul>
      </h2>
    </div>
  )
}
