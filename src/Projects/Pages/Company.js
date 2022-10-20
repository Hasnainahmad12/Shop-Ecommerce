import React from 'react'
import pic from "../Images/company.png"
import "../Styles/Company.css";

const Company = () => {
  return (
    <div className='flex flex-wrap'>
        <div className='company__left__side'>
            <h2 className='company__head'>Data to enrich your <br /><span className='text-blue-700'>online business</span></h2>

            <p className='company__paragh'>Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>

            <button className='company__btn1'>Get Started</button>
            <button className='company__btn2'>Live Demo</button>
        </div>      

        <div>
          <img src={pic} className='image h-[500px] w-[650px]' alt='' />
        </div>
    </div>
  
  )
}

export default Company