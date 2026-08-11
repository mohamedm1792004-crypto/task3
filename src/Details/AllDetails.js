import React from 'react'
import AllCompo from '../components/AllCompo'
import Footer from '../components/Footer'
import HeaderDetails from './HeaderDetails'
import SingleProperty from './SingleProperty'
import BestDeal from './BestDeal'



function AllDetails() {
  return (
    <div>
      <AllCompo />
    <HeaderDetails />
    <SingleProperty />
    <BestDeal />
      <Footer />
    </div>
  )
}

export default AllDetails