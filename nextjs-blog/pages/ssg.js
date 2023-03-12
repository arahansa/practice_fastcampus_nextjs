import Links from '../src/components/Links'
import Layout from '../src/components/Layout'
import SubLayout from '../src/components/SubLayout'

export async function getStaticProps() {
  return {
    props: { time: new Date().toISOString() },
  }
}

export default function SSG({ time }) {
  return (
    <>
      <h1 className="title">SSG : {time}</h1>
      <Links />
    </>
  )
}

SSG.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
