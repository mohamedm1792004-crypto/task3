import React from 'react'
import AllCompo from '../components/AllCompo'

import Footer from '../components/Footer'
import HeaderContact from './HeaderContact'
import PageContact from './PageContact'


function AllContact() {
  return (
    <div>
      <AllCompo />
      <HeaderContact />
      <PageContact />
      <Footer />
    </div>
  )
}

export default AllContact