
import Links from 'components/Links'
import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'

export default function Home() {

    return (
        <>
            <h1 className="title">FirstItem</h1>
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
