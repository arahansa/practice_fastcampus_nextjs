import React from 'react'
import Link from 'next/link'

const SubLayout = ({ children }) => {
  return (
    <div>
      <h1>
        <Link href={'/'}>홈으로 이동</Link>
        <br />
      </h1>
      {children}
    </div>
  )
}

export default SubLayout
