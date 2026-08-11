import React from 'react'
import AllCompo from './components/AllCompo'
import Banner from './Home/Banner'
import Featured from './Home/Featured'
import VideoSection from './Home/VideoSection'
import VideoContent from './Home/VideoContent'
import FunFacts from './Home/FunFacts'
import BestDeal from './Home/BestDeal'
import PropertiesSection from './Home/PropertiesSection'
import ContactSection from './Home/ContactSection'
import ContactContent from './Home/ContactContent'
import Footer from './components/Footer'



function App() {
  return (
    <>
      <AllCompo />
       <Banner />
       <Featured />
       <VideoSection />
       <VideoContent />
       <FunFacts />
        <BestDeal />
        <PropertiesSection />
        <ContactSection />
        <ContactContent />
      <Footer />
    </>
  )
}

export default App