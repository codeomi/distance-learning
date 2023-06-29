import React from 'react'
import "./home.scss"
import Section1 from './Sections/Section1'
import Section2 from './Sections/Section2.js'
import Section3 from './Sections/Section3.js'

const Home = () => {
  return (
   <>
  <div className="home">
 <Section1 />
 <Section2 />
 <Section3 />
  </div>
   </>
  )
}

export default Home