import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Links from '../src/components/Links'
import Layout from '../src/components/Layout'
import SubLayout from '../src/components/SubLayout'

export default function Home() {
  const [time, setTime] = useState(new Date().toISOString())

  useEffect(() => {
    console.log('browser')
    setTime(new Date().toISOString())
  }, [])

  return (
    <>
      <h1 className="title">CSR : {time}</h1>
      <Links />
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
