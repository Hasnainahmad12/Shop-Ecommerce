import React, { useState } from 'react'
import "../Styles/Login.css";
import {FaUser, FaLock} from "react-icons/fa";
//import { useNavigate } from "react-router-dom";

const Login = () => {
    
    const [Name , setName] = useState("");
    const [Password , setPassword] = useState("");

    const HandleLogin = (e) =>{

        if((Name==="") && (Password==="")){
            alert("Please Enter Name and Passowrd")
        }

        else if(Name==="hasnain" && Password==="hasnain"){
            alert("You are Loged In.. Welcome")
        }
        
    }

  return (
    <div>
        <div className='main__login'>
            <h2 className='heading'>Sign in to your account</h2>
            
            <div className='main__input'>
                <FaUser className='google__image'/>
                <input type="text" className='input' value={Name} onChange={e=>setName(e.target.value)} placeholder='user Name'/>
            </div>

             <div className='main__input'>
                <FaLock className='google__image'/>
                <input type="password" className='input' value={Password} onChange={e=>setPassword(e.target.value)} placeholder='Password'/>
            </div>

            <div>
                <button className='button' onClick={HandleLogin}>Login</button>
            </div>
            
                
        </div>
    </div>
  )
}

export default Login


// e.preventDefault();
// if(Name.toLocaleUpperCase() === "USER" && Password.toLocaleLowerCase() === "USER"){
//     navigate("/Home")
// }