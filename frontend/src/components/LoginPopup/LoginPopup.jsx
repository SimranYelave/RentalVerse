import React, { useContext, useEffect, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'



const LoginPopup = ({setShowLogin}) => {
  const {url,setToken}=useContext(StoreContext)
    const [currState,setCurrState] = useState("Login")
    const [data,setData] = useState({
      name:"",
      email:"",
      password:""
    })

    const onChangeHandler =(event)=>{
      const name = event.target.name;
      const value = event.target.value;
      setData(data=>({...data,[name]:value}))
    }

    useEffect(()=>{// this will tell how things are working
      console.log(data),[data]
    })



    const onlogin = async(event)=>{
       event.preventDefault()
       try{

         let newUrl = url;
         if(currState=="Login"){
           newUrl +="/api/user/Login"
          }
          else{
            newUrl += "/api/user/SignUp"
          }
       const response = await axios.post(newUrl,data);

       if (response.data.success) {
        console.log("logged in successfully");
        setToken(response.data.token); // Pass the received token
      
        localStorage.setItem("token", response.data.token);
        setShowLogin(false)
      }
      else{
        alert(response.data.message)
      }
    }catch(error){
      console.log(error)
    }
    }



  return (
    <div className='login-popup'>
      <form  onSubmit={onlogin}  className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currState==="Login"?<></>:<input name='name' onChange= {onChangeHandler} value={data.name} type="text" placeholder='Your name' required/>}
          <input name='email' onChange= {onChangeHandler} value={data.email} type="email" placeholder='Your Email' required />
          <input name='password' onChange= {onChangeHandler} value={data.password} type="password" placeholder='Password' required />

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
        <button type='submit'>{currState==="Sign Up"?"Create account":"Login"}</button>
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
