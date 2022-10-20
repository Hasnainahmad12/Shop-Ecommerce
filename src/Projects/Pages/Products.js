import React from 'react'
import Cards from '../Components/Cards'
import "../Styles/Products.css"
import { data } from '../Config/Data'

const Products = () => {
  return (
    <>
    <h2 className='pro__head'>Store <span className='text-blue-700'>Products</span></h2>
    <div className='flex flex-wrap justify-center gap-6 mt-4'>
      {data.map((it) =>{
        return <div>
          <Cards imgSrc={it.pic} title={it.title} price={it.price}/>
        </div>
      })}
    </div>
    </>
  )
}

export default Products