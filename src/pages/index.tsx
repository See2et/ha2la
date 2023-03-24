import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import HangulToRomanization from './components/HangulToRomanization'
import { css } from '@emotion/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Ha2Al</title>
        <meta name="description" content="Hangul to Alphabet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HangulToRomanization />
      </main>
    </>
  )
}
