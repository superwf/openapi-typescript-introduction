import * as React from 'react'

import { coordinates } from '../coordinate'

import s from './style.module.less'

export const Overview: React.FC = () => {
  return (
    <div className={`step ${s.step}`} {...coordinates.overview}>
      <h1 className={`text-center color8 ${s.title}`}>谢谢收看</h1>
      <h2 className={`text-center color12 ${s.content}`}>欢迎试用 ts-gear</h2>
    </div>
  )
}
