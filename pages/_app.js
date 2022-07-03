import '../public/assets/css/style.scss'
import Head from 'next/head'
import Header from '../components/Header/Header'
import LeftSideBar from '../components/LeftSideBar/LeftSideBar'
import Footer from '../components/Footer/Footer'

export default function MyApp({ Component, pageProps }) {

    return <div className={`min-h-screen scroll-smooth hover:scroll-auto`}>
        <Head>
            <title>Rokas Rudys</title>
            <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon-16x16.png"/>
            <link rel="manifest" href="/assets/images/site.webmanifest"/>
        </Head>
        <Header/>
        <LeftSideBar/>
        <Component {...pageProps} />
        <Footer/>
    </div>
}