import * as React from 'react'

import s from './style.module.less'

export const Bridge = () => {
  const wrapperRef = React.useRef<HTMLDivElement>(null)
  React.useEffect(() => {
    const enter = () => {
      const root = wrapperRef.current
      if (root) {
        const swaggerWorld = root.querySelector(`.${s.swaggerWorld}`) as HTMLDivElement
        const esWorld = root.querySelector(`.${s.esWorld}`) as HTMLDivElement
        const bridge = root.querySelector(`.${s.bridge}`) as HTMLDivElement
        swaggerWorld.classList.add('animated', 'bounceInLeft', s.active)
        esWorld.classList.add('animated', 'bounceInRight', s.active)
        bridge.classList.add('animated', 'bounceInDown', s.active)
      }
    }

    const leave = () => {
      const root = wrapperRef.current
      if (root) {
        const swaggerWorld = root.querySelector(`.${s.swaggerWorld}`) as HTMLDivElement
        const esWorld = root.querySelector(`.${s.esWorld}`) as HTMLDivElement
        const bridge = root.querySelector(`.${s.bridge}`) as HTMLDivElement
        swaggerWorld.classList.remove('animated', 'bounceInLeft', s.active)
        esWorld.classList.remove('animated', 'bounceInRight', s.active)
        bridge.classList.remove('animated', 'bounceInDown', s.active)
      }
    }
    const root = wrapperRef.current
    if (root) {
      root.addEventListener('impress:stepenter', enter)
      root.addEventListener('impress:stepleave', leave)
    }
    return () => {
      if (root) {
        root.removeEventListener('impress:stepenter', enter)
        root.removeEventListener('impress:stepenter', leave)
      }
    }
  }, [])
  return (
    <div id="bridge" ref={wrapperRef} className={`${s.stepWrapper} step`} data-x="0" data-y="0" data-scale="10">
      <div className={s.swaggerWorld}>Swagger World</div>
      <div className={s.bridge}>
        <h2 className={s.title}>代码生成器</h2>
        <img alt="" src="/asset/bridge.jpg" className={s.bridgeImg} />
      </div>
      <div className={s.esWorld}>Ecmascript World</div>
    </div>
  )
}
