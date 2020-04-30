import * as React from 'react'

interface IProps {
  href: string
  children: React.ReactNode
}

export const LinkOutside: React.FC<IProps> = ({ href, children }) => {
  return (
    <a target="_blank" href={href} rel="noopener noreferrer">
      {children}
    </a>
  )
}
