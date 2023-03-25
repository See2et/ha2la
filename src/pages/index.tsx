import Head from 'next/head'
import HangulToRomanization from './components/HangulToRomanization'
import { css } from '@emotion/react'

const main = css({
  height: '100vh',
  width: '100vw',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#202020',
  padding: '7vw',
})

const title = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'left',
  width: '80vw'
})

const h1 = css({
  fontSize: "6vw",
})

const h2 = css({
  fontSize: "3.5vw",
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Ha2Al</title>
        <meta name="description" content="Hangul to Alphabet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main css={main}>
        <div css={title}>
          <h1 css={h1}>Ha2La</h1>
          <h2 css={h2}>Hangul Romanizer</h2>
        </div>
        <HangulToRomanization />
      </main>
    </>
  )
}
