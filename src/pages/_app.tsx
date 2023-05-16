import type { AppProps } from 'next/app'
import GlobalStyles from '../styles/GlobalStyles'
import { montserrat } from '../utils'
import { GlobalProvider } from '../context/GlobalContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <GlobalStyles />
      <div className={montserrat.className}>
        <Component {...pageProps} />
      </div>
    </GlobalProvider>
  )
}

export default MyApp
