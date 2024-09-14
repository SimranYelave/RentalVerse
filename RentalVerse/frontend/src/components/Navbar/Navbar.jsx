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
        <Link to='/' onClick={()=>setMenu("home")} className={menu==='home'?"active":""}>home</Link>
        <a href='#browser-laptops' onClick={()=>setMenu("laptops")} className={menu==='labtops'?"active":""}>labtops</a>
        <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==='mobile-app'?"active":""}>mobile-app</a>
        <a href='#footer' onClick={()=>setMenu("contact us")} className={menu==='contact us'?"active":""}>contact us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} srcset="" />
        <div className="navbar-search-icon">
            <Link to='/cart' ><img src={assets.basket_icon} alt="" srcset="" /></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>sign in</button>
      </div>
    </div>
  )
}

export default Navbar
