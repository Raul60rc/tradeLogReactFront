import React from 'react'
import './Pricing.scss'

const Pricing = () => {
  return (
    <div>
      <div className='pricing-box'>
        <h2>Monthly Plan</h2>
        <p>Price €9.99</p>
        <button>Buy Now</button>
      </div>
      <div className='pricing-box'>
       <h2>Quaterly Plan</h2>
       <p>Price €24.99</p>
       <button>Buy Now</button>
      </div>
      <div className='pricing-box'>
        <h2>Annual Plan</h2>
        <p>Price €79.99</p>
        <button>Buy Now</button>
      </div>
    </div>
  )
}

export default Pricing