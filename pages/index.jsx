import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Home from '@/pages/Home'

export default function Home() {
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
            <main className={styles.main}>
                <Home />
            </main>
        </>
    )
}
