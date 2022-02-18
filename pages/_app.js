import '../assets/css/globals.css'

export default function MyApp({ Component, pageProps }) {
    return <div className={"grid bg-sky-500 min-h-screen"}>
        {/* <Header/> */}
        <div className={'flex grow'}>
            <Component {...pageProps} />
        </div>
    </div>
}