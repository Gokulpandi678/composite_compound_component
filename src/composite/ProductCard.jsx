import React from 'react'
import Price from './Price'
import Ratings from './Ratings'
import Title from './Title'

const ProductCard = () => {
  return (
    <div>
      <h1 className='text-blue-400 text-3xl font-bold font-serif '>This is composite component</h1>
      <div className='border-5 w-max p-3 border-gray-500 shadow'>
        <Title title="Nike shoe" />
        <Price price={10} />
        <Ratings ratings={5} />
      </div>
    </div>
  )
}

export default ProductCard