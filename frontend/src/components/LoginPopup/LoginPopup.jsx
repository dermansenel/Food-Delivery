import React, { useState } from 'react'
import './LoginPopup.css'
import {assets} from '../../assets/assets'
    
export const LoginPopup = ({ setShowLogin }) => {
    
    const[currState,setCurrState] = useState("Login")
  return (
    <div className='login-popup'>
        <form  className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
            </div>
            <div className="login-popup-inputs">
                {currState==="Login"?<></>:<input type="text" placeholder='Your Name' required/>}
                
                <input type="email" placeholder='Your Mail' required />
                <input type="password" placeholder='Password' required/>
            </div>
            <button>{currState==="Sign Up"?"Create Account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" />
                <p>Privacy policy</p>
            </div>
            {currState === "Login"
            ?<p>Create a new account <span onClick={()=>setCurrState("Sign Up")}>Click Here</span></p>
            :<p>Already have an account?<span onClick={()=>setCurrState("Login")}>Click Here</span></p>
            }
        </form>
    </div>
  )
}
