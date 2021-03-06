import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import initAuth from '../services/init-auth'

initAuth();

function MyApp({ Component, pageProps }: AppProps) {

  return <Component {...pageProps} />
}
export default MyApp
