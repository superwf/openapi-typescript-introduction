import * as React from 'react'

import { LinkOutside } from '../LinkOutside'
import { coordinates } from '../coordinate'
import { assetPath } from '../assetPath'

import s from './style.module.less'

export const Swagger = () => {
  return (
    <div className={`step ${s.step}`} {...coordinates.Swagger}>
      <h1 className="title text-center color10">Swagger</h1>
      <h2 className="color8">
        <p>📖 概念: 一种使用 OpenApi 规范，生成 JSONSchema格式 在线restful文档的一系列工具集的统称。</p>
        <p>🐾 作用范围: 各种主流语言都有其一系列工具链的实现，例如: java、nodejs、golang等。</p>
        <p>
          <LinkOutside href="https://swagger.io/">🌐 官网: https://swagger.io/ </LinkOutside>
        </p>
        <img alt="swaggerTools" src={assetPath('/asset/swaggerTools.png')} />
        <p>
          🚫 左侧<b className="color10">PRO</b>
          相关的工具基本都是直接使用<b className="color10">第三方服务</b>，考虑到数据安全的角度，可以忽略。
        </p>
        <p>
          🛠 主要可用工具链为右侧<b className="color11">Open Souece</b>部分<b className="color12">Swagger Editor</b>、
          <b className="color13">Swagger UI</b>、<b className="color14">Swagger Codegen</b>。
        </p>
        <ul>
          <li>
            <b className="color12">Swagger Editor</b>: 在线编辑Oper Api实时查看结果
            <a href="https://editor.swagger.io/">Demo网址</a>
          </li>
          <li>
            <b className="color12">Swagger UI</b>: 根据Open Api的定义，为自己的站点自动生成一个友好的查看api的页面。
            <a href="https://petstore.swagger.io/">Demo网址</a>
          </li>
          <li>
            <b className="color12">Swagger Codegen</b>: 请看下页。
          </li>
        </ul>
      </h2>
    </div>
  )
}
