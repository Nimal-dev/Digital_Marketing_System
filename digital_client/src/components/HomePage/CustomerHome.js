import React from 'react'
// import CustomerProducts from '../Tables/CustomerProducts'
import CustomerNavbar from '../Common/CustomerNavbar'
import HeroSection from '../Home_Components/HeroSection'
import ProductSection from '../Home_Components/ProductSection'
import ChooseUs from '../Home_Components/ChooseUs'

function CustomerHome() {
  return (
    <>
    <CustomerNavbar/>
    <HeroSection/>
    <ProductSection/>
    <ChooseUs/>
    </>
  )
}

export default CustomerHome