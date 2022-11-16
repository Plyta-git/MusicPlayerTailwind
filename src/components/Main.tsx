import React from 'react'

type BoxProps = {
  children?: React.ReactNode;
  className: string;
}

export default function Main({children, className}: BoxProps) {
  return (
    <div className={className}>Main</div>
  )
}
