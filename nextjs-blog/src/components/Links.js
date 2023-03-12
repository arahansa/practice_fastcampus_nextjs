import React from 'react'
import Link from 'next/link'

const Links = () => {
  return (
    <div>
      <Link href={'/csr'}>CSR 로 이동</Link>
      <br />
      <Link href={'/ssg'}>SSG 로 이동</Link>
      <br />
      <Link href={'/isr'}>ISR 로 이동</Link>
    </div>
  )
}

export default Links
