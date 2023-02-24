import Head from 'next/head'
import Image from 'next/image'
import Home from '@/pages/Home'

export default function Index() {
    return (
        <>
            <Head>
                <title>0xFethr</title>
                <meta
                    name="description"
                    content="Decentralised journalism application driven by the community"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Home />
            </main>
        </>
    )
}
