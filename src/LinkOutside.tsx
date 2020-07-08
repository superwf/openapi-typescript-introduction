import * as React from 'react'

interface IProps {
  href: string
  children: React.ReactNode
  className?: string
}

export const LinkOutside: React.FC<IProps> = ({ href, children, className }) => {
  return (
    <a target="_blank" href={href} rel="noopener noreferrer" className={className}>
      {children}
    </a>
  )
}
