"use client"
import './globals.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init({
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <html lang="en">
      <Header />
      <body>{children}</body>
      <Footer/>
    </html>
  )
}
