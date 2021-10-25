import * as React from 'react'

import { coordinates } from '../coordinate'

import s from './style.module.less'

export const Title: React.FC = () => {
  return (
    <div className={`step ${s.step}`} {...coordinates.title}>
      <h1 className="color08 text-center">
        如何从<b className="color4">Swagger 定义</b>
        <b className="color6">自动</b>生成
        <b className="color10">请求层 Service</b>代码
      </h1>
    </div>
  )
}
