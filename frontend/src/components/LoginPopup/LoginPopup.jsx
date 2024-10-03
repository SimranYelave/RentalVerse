import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [currState,setCurrState] = useState("Login")

  return (
    <div className='login-popup'>
      <form  className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currState==="Login"?<></>:<input type="text" placeholder='Your name' required/>}
          <input type="email" placeholder='Your Email' required />
          <input type="password" placeholder='Password' required />

          <div className="radio">
          <div className="radio-1">
          <input type ="radio" name="butt" id="Butt-1" value="seller" required/>
          <label for="seller">Seller</label>
          </div>
          <div className="radio-2">
          <input type ="radio" name="butt" id="Butt-2" value="buyer" required/>
          <label for="buyer">Buyer</label>
          </div>

          </div>

        </div>
        <button>{currState==="Sign Up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" name="" id="" required />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState==="Login"
        ?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>CLICK HERE</span></p>
        :<p>Already have an account? <span onClick={()=>setCurrState("Login")}>LOGIN</span></p>
        }
      </form>
    </div>
  )
}

export default LoginPopup
