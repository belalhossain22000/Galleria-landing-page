import React from 'react'
import MetalDescription from './components/MetalDescription/MetalDescription'
import ExplainMetal from './components/ExplainMetal/ExplainMetal'
import FeaturedCollection from './components/FeaturedCollection/FeaturedCollection'
import Categories from './components/Categories/Categories'

const HomePage = () => {
  return (
    <div>
      <MetalDescription></MetalDescription>
      <ExplainMetal></ExplainMetal>
      <FeaturedCollection></FeaturedCollection>
      <Categories></Categories>
    </div>
  )
}
export default HomePage
