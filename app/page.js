import React from 'react'
import MetalDescription from './components/MetalDescription/MetalDescription'
import ExplainMetal from './components/ExplainMetal/ExplainMetal'
import FeaturedCollection from './components/FeaturedCollection/FeaturedCollection'

const HomePage = () => {
  return (
    <div>
      <MetalDescription></MetalDescription>
      <ExplainMetal></ExplainMetal>
      <FeaturedCollection></FeaturedCollection>
    </div>
  )
}
export default HomePage
