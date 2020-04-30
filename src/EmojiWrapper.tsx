import * as React from 'react'

interface IProps {
  children: React.ReactNode
}

export const EmojiWrapper: React.FC<IProps> = ({ children }) => {
  return (
    <span role="img" aria-label="next">
      {children}
    </span>
  )
}
