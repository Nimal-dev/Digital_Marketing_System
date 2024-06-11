import React from 'react'
import CustomerNavbar from '../Common/CustomerNavbar'
import CartContents from './CartContents'

function Cart() {
  return (
    <>
    <CustomerNavbar/>
    <h1 style ={{color: 'black', marginLeft: '50px', marginTop:'50px'}}>Cart</h1>
    <CartContents/>
    </>
  )
}

export default Cart