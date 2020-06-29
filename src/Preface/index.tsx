import * as React from 'react'

import { coordinates } from '../coordinate'

import s from './style.module.less'

export const Preface: React.FC = () => {
  return (
    <div id="preface" className={`step ${s.step}`} {...coordinates.Preface}>
      <h1 className="text-center title">前言</h1>
      <h2 className="align-center">
        1.面向人群
        <img
          className="animate__animated animate__bounceInLeft animate__delay-1s"
          alt="serverCoder"
          src="/asset/serverCoder.jpg"
        />
        <img
          className="animate__animated animate__backInRight animate__delay-4s"
          alt="clientCoder"
          src="/asset/clientCoder.jpg"
        />
      </h2>
      <h2>
        2.概述:
        <p>本文介绍的是一种针对由swagger接口定义 --->自动生成---> service层代码的一系列 📖概念 与 🛠 工具。</p>
      </h2>
      <h2>3.解决问题</h2>
      <h3>
        <ol>
          <li>什么是 Swagger？什么是 OpenApi？他们是什么关系？</li>
          <li>Swagger(OpenApi) 定义了什么？为什么可以生成代码？</li>
          <li>我现在开发使用(XXX)编程语言，有可用的生成器吗？</li>
          <li>生成器能工作到什么地步，生成的代码都能开箱即用吗？</li>
          <li>针对前端的一些生成器最佳工具。</li>
        </ol>
      </h3>
    </div>
  )
}
