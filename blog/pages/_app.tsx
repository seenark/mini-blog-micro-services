import '../styles/globals.css'
import type { AppProps } from 'next/app'
import getConfig from 'next/config'

function MyApp({ Component, pageProps }: AppProps) {
  const {publicRuntimeConfig} = getConfig()
  console.table(publicRuntimeConfig)
  return <Component {...pageProps} />
}

export default MyApp
