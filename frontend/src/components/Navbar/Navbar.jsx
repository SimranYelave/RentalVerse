import React,{useContext, useState}from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {
    
    const [menu,setMenu] = useState("laptops");

    const {getTotalCartAmount,token,setToken} = useContext(StoreContext);
    const Navigate = useNavigate();
    const Logout = () =>{
        console.log('HIIII MOTHERFUCKER');
        localStorage.removeItem("token")
        setToken("");
        Navigate("/")
    }
  return (
    <div className='navbar'>
      <Link to='/' ><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("home")} className={menu==='home'?"active":""}>Home</Link>
        <a href='#browser-laptops' onClick={()=>setMenu("laptops")} className={menu==='labtops'?"active":""}>Laptops</a>
        <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==='mobile-app'?"active":""}>Mobile</a>
        <a href='#footer' onClick={()=>setMenu("contact us")} className={menu==='contact us'?"active":""}>Contact us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} srcSet="" />
        <div className="navbar-search-icon">
            <Link to='/cart' ><img src={assets.bag_icon} alt="" srcSet="" /></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        {!token?
        
        <button onClick={()=>setShowLogin(true)}>LOGIN</button>
        :<div className="navbar-profile">
           <img src={assets.profile_icon} alt=""/>
           <ul className='nav-profile-dropdown'>
              <li><img src={assets.bag_icon} alt=""/>
              <p>Orders</p>
              </li>
              <hr/>
              <li onClick={Logout}><img src={assets.logout_icon} alt=""/>
              <p>Logout</p>
              </li>
            </ul>
        </div>
        }
        </div>
    </div>
  )
}

export default Navbar
