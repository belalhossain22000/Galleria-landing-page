import React from 'react'
import Banner from './components/Banner/Banner'
import Brands from './components/Brands/Brands'
import MetalDescription from './components/MetalDescription/MetalDescription'
import ExplainMetal from './components/ExplainMetal/ExplainMetal'
import FeaturedCollection from './components/FeaturedCollection/FeaturedCollection'
import Categories from './components/Categories/Categories'
import Footer from './components/Footer/Footer'
import FeaturedNfts from './components/FeaturedNfts/FeaturedNfts'

const HomePage = () => {
  return (
    <div>
      <Banner/>
      <Brands/>
      <MetalDescription/>
      <ExplainMetal/>
      <FeaturedCollection/>
      <FeaturedNfts></FeaturedNfts>
      <Categories/>
      <Footer/>
    </div>
  )
}
export default HomePage
