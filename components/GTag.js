import Script from 'next/script'

export default function Header(props) {
    return <>
       <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-Y4WKCP05DT"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-Y4WKCP05DT');
        `}
      </Script>
    </>
}
