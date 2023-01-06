import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Map from '../components/Map'
import Header from '../components/header'
import react from 'react'
import styled from 'styled-components'
import Text from '../components/text'

const MapCont = styled.div`
  
`

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
        <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
    
      
      <main className={styles.main}>
        
        <Map/>
        <Body/>
        
      </main>
    </>
  )
}