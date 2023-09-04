import Head from 'next/head'
import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'

export default function Meta() {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        // href="/favicon/apple-touch-icon.png"
        href="/favicon/logo32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        // href="/favicon/favicon-32x32.png"
        href="/favicon/logo32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        // href="/favicon/favicon-16x16.png"
        href="/favicon/logo32.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        // href="/favicon/safari-pinned-tab.svg"
        href="/favicon/logo32.png"
        color="#000000"
      />
      {/* <link rel="shortcut icon" href="/favicon/favicon.ico" /> */}
      <link rel="shortcut icon" href="/favicon/logo32.png" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content={`Slow but surely updated by the Farmers of ${CMS_NAME}.`}
      />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
    </Head>
  )
}
