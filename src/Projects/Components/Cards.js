import React from 'react'

const Cards = ({imgSrc, title, price}) => {
  return (
    <div className='h-96 w-96'>
        <img src={imgSrc} className="h-80 w-96 border rounded-t-lg hover:opacity-75" alt='' />
        <p className='pl-3 text-gray-600 font-semibold'>{title}</p>
        <p className='pl-3 font-semibold'>{price}</p>
    </div>
  )
}

export default Cards