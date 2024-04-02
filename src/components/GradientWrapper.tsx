import React, { DetailedHTMLProps, HTMLAttributes } from 'react'

type Props = { borderWidth?: number } & DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

function GradientWrraper({ borderWidth = 3, className, children, ...others }: Props) {
  return (
    <div className={'relative ' + className} {...others}>
      <div
        className='gradient-border pointer-events-none'
        style={{ position: 'absolute', '--b': borderWidth + 'px' } as React.CSSProperties}
      />
      {children}
    </div>
  )
}

export default GradientWrraper
