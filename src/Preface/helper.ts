import * as React from 'react'

// 一共两个图，count到2结束
let count = 0

export const addImageAnimateClass = (e: React.MouseEvent<HTMLHeadingElement>) => {
  if (count > 1) {
    return
  }
  const target = e.currentTarget
  const images = target.querySelectorAll('img')
  if (count === 0) {
    images[0].classList.remove('invisible')
    images[0].classList.add('animate__bounceInLeft')
    count += 1
    return
  }
  if (count === 1) {
    images[1].classList.remove('invisible')
    images[1].classList.add('animate__backInRight')
    count += 1
  }
}
