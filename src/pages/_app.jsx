import { Poppins } from 'next/font/google'
import NextNProgress from 'nextjs-progressbar'
import '../styles/globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: '400' })

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={poppins.className}>
      <NextNProgress color="#1DB954" stopDelayMs={0} />
      <Component {...pageProps} />
    </main>
  )
}