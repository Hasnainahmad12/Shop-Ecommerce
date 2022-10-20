import React from 'react'

const WomenCard = ({pic, Name, shop}) => {
  return (
    <div className="flex flex-wrap gap-8 pl-16 pt-14">
      <img src={pic} className="h-[250px] w-[250px] rounded-lg gap-4" alt="" />
      <p>{Name}</p>
      <button className="">{shop}</button>
    </div>
  )
}

export default WomenCard