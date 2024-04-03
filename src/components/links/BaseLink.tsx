import React from 'react'
import { Link, LinkProps } from 'react-router-dom'

type Props = { underline?: boolean; external?: boolean; to: string } & Omit<LinkProps, 'to'>

function BaseLink({ to, className, underline, children, external, ...others }: Props) {
  if (external) {
    return (
      <a
        href={to}
        target='_blank'
        rel='noreferrer'
        className={`hover:text-[var(--accent)] ${underline ? 'underline' : ''} ${className}`}
      >
        {children}
      </a>
    )
  }

  return (
    <Link
      to={to}
      className={`hover:text-[var(--accent)] ${underline ? 'underline' : ''} ${className}`}
      {...others}
    >
      {children}
    </Link>
  )
}

export default BaseLink
