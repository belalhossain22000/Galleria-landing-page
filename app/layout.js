"use client"
import './globals.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { metadata } from './utils/metadata'



export default function RootLayout({ children }) {
 
  
  return (
    <html lang="en">
      <Header />
      <body>{children}</body>
      <Footer/>
    </html>
  )
}
