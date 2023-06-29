import React from 'react'
import "./logo.scss"
import Imgae from "../../assets/university-education-logo-design-template-free-vector.jpg"

const Logo = ({logo}) => {
  return (
    <>
   <img className='university-logo' src={Imgae} alt="" />
    </>
  )
}

export default Logo