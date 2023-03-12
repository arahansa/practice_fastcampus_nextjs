import Layout from '../src/components/Layout'

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>)

  return getLayout(<Component {...pageProps} />)
}
