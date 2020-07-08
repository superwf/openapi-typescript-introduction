import * as React from 'react'

import { coordinates } from '../coordinate'

import s from './style.module.less'
import { addImageAnimateClass } from './helper'

export const Preface: React.FC = () => {
  return (
    <div className={`step ${s.step}`} {...coordinates.preface}>
      <h1 className="text-center title color4">前言</h1>
      <h2 className="align-center color8" onClick={addImageAnimateClass}>
        <b className="color8">1.</b>面向人群
        <img className="animate__animated invisible" alt="serverCoder" src="/asset/serverCoder.jpg" />
        <img className="animate__animated invisible" alt="clientCoder" src="/asset/clientCoder.jpg" />
      </h2>
      <h2 className="color8">
        <b>2.</b>概述
        <p className="hoverBigger">swagger接口定义 自动生成---&gt; service层代码的一系列 📖概念 与 🛠 工具。</p>
      </h2>
      <h2 className="color8">
        <b>3.</b>解决问题
      </h2>
      <h3 className="color8">
        <ol>
          <li className="hoverBigger">什么是 Swagger？什么是 OpenApi？他们是什么关系？</li>
          <li className="hoverBigger">在了解这些概念之后，这些概念所衍生出的代码生成器生态系统。</li>
          <li className="hoverBigger">这么多代码生成器，应该如何选择？</li>
        </ol>
        <p className="hoverBigger indent" data-color="green">
          3.1 针对前端的一些生成器最佳工具。
        </p>
      </h3>
    </div>
  )
}
