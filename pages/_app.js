import '../public/assets/css/globals.css'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
    return <div className={"grid bg-sky-500 min-h-screen"}>
        {/* <Header/> */}
        <Head>
            <title>Rokas Rudys</title>
            <link rel="icon" type="image/png" href="../assets/images/favicon.png" />
        </Head>
        <div className={'flex grow'}>
            <Component {...pageProps} />
        </div>
    </div>
}