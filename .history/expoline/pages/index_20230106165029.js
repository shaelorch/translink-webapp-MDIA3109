import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Map from '../components/Map'
import Header from '../components/header'
import react from 'react'
import styled from 'styled-components'
import Text from '../components/text'
import Body from '../components/body'
import {AiOutlinePlus} from "react-icons/ai"

const MapCont = styled.div`
  
`

const inter = Inter({ subsets: ['latin'] })





export default function Home() {
  const style = {color:"#183152", fontFamily:"Helvetica, sans-serif", paddingTop:30, paddingBottom:30}
  const pstyle = {color:"#183152", fontFamily:"Helvetica, sans-serif", paddingBottom:8}
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
        <div>
           <h1 style={style}>Expo Line</h1>
           <p style={{color:"#183152", fontFamily:"Helvetica, sans-serif", paddingBottom:20}}>
           The Expo Line operates two routes:</p>

           <p style={pstyle}>- Waterfront Station (Downtown Vancouver) to King George Station (Surrey)</p>

           <p style={pstyle}>- Waterfront Station (Downtown Vancouver) to Production Way–University Station (Burnaby)</p>

           <p style={style}>Transfer to the Millennium Line at the following stations:</p>

           <p style={pstyle}>- Commercial–Broadway Station</p>

           <p style={pstyle}>- Lougheed Town Centre Station</p>

           <p style={pstyle}>- Production Way–University Station</p>

           <p style={{color:"#183152", fontFamily:"Helvetica, sans-serif", paddingTop:20}}>Use Columbia Station to transfer to and from a train going to either King George or Production Way–University.</p>

           <p style={{color:"#183152", fontFamily:"Helvetica, sans-serif", paddingTop:20, paddingBottom:30}}>Use Waterfront Station to transfer to the Canada Line, SeaBus, or West Coast Express.
              </p>
        </div>

        <hr class="solid"/>
        <div style={{display:"flex", alignContent:"center", justifyContent:"space-between"}}>
          <h1 style={style}>Expo Line Schedule</h1>
          <AiOutlinePlus style={{color:"#183152", width:30, height:30, display:"flex"}}/>
        </div>
        
        <hr class="solid"/>

       
        
      </main>
    </>
  )
}
