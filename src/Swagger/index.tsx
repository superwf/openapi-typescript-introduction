import * as React from 'react'

import { LinkOutside } from '../LinkOutside'
import { coordinates } from '../coordinate'

import s from './style.module.less'

export const Swagger = () => {
  return (
    <div className={`step ${s.step}`} {...coordinates.Swagger}>
      <h1 className="title text-center">Swagger</h1>
      <h2>
        <p>📖 概念: 一种使用 OpenApi 规范，生成 JSONSchema格式 在线restful文档的一系列工具集的统称</p>
        <p>🐾 作用范围: 各种主流语言都有其一系列工具链的实现，例如: java、nodejs、golang等</p>
        <p>
          <LinkOutside href="https://swagger.io/">🌐 官网: https://swagger.io/ </LinkOutside>
        </p>
        <p>
          🛠 主要工具链包括 <b>Swagger UI</b> <b>Swagger Editor</b>等
        </p>
        <ul>
          <li>
            Swagger UI ---&gt;
            <a href="https://petstore.swagger.io/?_ga=2.13122420.239870436.1593480985-199330297.1593480985">Demo</a>
          </li>
          <li>
            Swagger Editor ---&gt;
            <a href="https://editor.swagger.io/?_ga=2.53808363.239870436.1593480985-199330297.1593480985">Demo</a>
          </li>
        </ul>
      </h2>
    </div>
  )
}
