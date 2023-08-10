import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head />
      <body className='bg-[#030303] bg-gradient-to-b from-zinc-900'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}