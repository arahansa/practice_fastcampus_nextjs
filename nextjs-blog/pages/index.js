import Head from 'next/head'
import Link from 'next/link'
import Links from '../src/components/Links'

export async function getServerSideProps() {
  return {
    props: { time: new Date().toISOString() },
  }
}
export default function Home({ time }) {
  return (
    <>
      <h1 className="title">{time}</h1>
      <Links />
    </>
  )
}
