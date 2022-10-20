import React from 'react'
import men1 from "../Images/women.jpg";
import men2 from "../Images/women1.jpg";

const men= [
  {pic: men1, name:"New Arrivals", shop: "Shop Now"},
  {pic: men2, name:"Basic Tees", shop: "Shop Now"},
]
const Men = () => {
  return (
    <>
      <div className='flex flex-wrap gap-8 pl-16 pt-14'>
          {men.map((it) =>{
            return <div>
              <img src={it.pic} className='h-[250px] w-[250px] rounded-lg gap-4 hover:opacity-75' alt='' />
              <p className='pt-5 font-semibold'>{it.name}</p>
              <button className='text-gray-600'>{it.shop}</button>
            </div>
          })}

      <div className='flex flex-wrap gap-40 pl-8 leading-10'>
        <div>
        <p className='font-semibold pl-4'>Clothing</p>
            <button className='text-sm font-bold text-gray-500 pl-4'>Top</button><br />
            <button className='text-sm font-bold text-gray-500 pl-4'>Dresses</button><br />
            <button className='text-sm font-bold text-gray-500 pl-4'>Pants</button><br />
            <button className='text-sm font-bold text-gray-500 pl-4'>Denim</button><br />
            <button className='text-sm font-bold text-gray-500 pl-4'>Sweater</button><br />
            <button className='text-sm font-bold text-gray-500 pl-4'>T-shirts</button><br />
            <button className='text-sm font-bold text-gray-500 pl-4'>Jackets</button><br />
            <button className='text-sm font-bold text-gray-500 pl-4'>ActiveWear</button><br />
            <button className='text-sm font-bold text-gray-500 pl-4'>Browse ALl</button><br />
        </div>

        <div>
        <p className='font-semibold pl-4'>Accessories</p>
            <button className='text-sm font-bold text-gray-500 pl-4'>watches</button><br />
            <button className='text-sm font-bold text-gray-500 pl-4'>Dresses</button><br />
            <button className='text-sm font-bold text-gray-500 pl-4'>Wallets</button><br />
            <button className='text-sm font-bold text-gray-500 pl-4'>Bags</button><br />
            <button className='text-sm font-bold text-gray-500 pl-4'>Sunglasses</button><br />
            <button className='text-sm font-bold text-gray-500 pl-4'>Hats</button><br />
            <button className='text-sm font-bold text-gray-500 pl-4'>Belts</button><br />
        </div>

        <div>
        <p className='font-semibold pl-4'>Brands</p>
            <button className='text-sm font-bold text-gray-500 pl-4'>Fully Nelson</button><br />
            <button className='text-sm font-bold text-gray-500 pl-4'>my way</button><br />
            <button className='text-sm font-bold text-gray-500 pl-4'>Re-Arrange</button><br />
            <button className='text-sm font-bold text-gray-500 pl-4'>Bags</button><br />
            <button className='text-sm font-bold text-gray-500 pl-4'>Counteit</button><br />
            <button className='text-sm font-bold text-gray-500 pl-4'>Significants</button><br />
        </div>
      </div>
    </div>
    </>
  )
}

export default Men