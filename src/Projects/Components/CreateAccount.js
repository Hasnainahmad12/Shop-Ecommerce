import React from 'react'
import "../Styles/CreateAccount.css";
// import {FaUser, FaLock} from "react-icons/fa";

const CreateAccount = () => {
  return (
    <div className='main__create'>
        <h2 className='main__heading'>Create your own account</h2>

        <form>
            <input type="text" className='input1' placeholder='user Name' />
            <input type="text" className='input1' placeholder='user Email' />
            <input type="text" className='input1' placeholder='user contact' />
            <input type="text" className='input1' placeholder='user Email' />
            <input type="text" className='input__address' placeholder='Address' />
            <button className='create__button'>Register</button>
        </form>
    </div>
  )
}

export default CreateAccount