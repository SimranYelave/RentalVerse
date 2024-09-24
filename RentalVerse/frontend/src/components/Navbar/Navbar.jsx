import React,{useContext, useState}from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {
    
    const [menu,setMenu] = useState("laptops");

    const {getTotalCartAmount} = useContext(StoreContext);

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
        <img src={assets.search_icon} srcset="" />
        <div className="navbar-search-icon">
            <Link to='/cart' ><img src={assets.bag_icon} alt="" srcset="" /></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>SIGN IN</button>
      </div>
    </div>
  )
}

export default Navbar
