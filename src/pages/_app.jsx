import NextNProgress from 'nextjs-progressbar'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <main>
      <NextNProgress color="#1DB954" stopDelayMs={0} />
      <Component {...pageProps} />
    </main>
  )
}