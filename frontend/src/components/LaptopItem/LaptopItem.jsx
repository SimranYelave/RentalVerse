import React, { useContext } from 'react';
import './LaptopItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';
const LaptopItem = ({id,name,price,description,image}) => {

    
    const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);
    
  return (
    <div className='laptop-item'>
        <div className="laptop-items-img-container">
          <img className='laptop-item-image' src={image} alt=''/>
          {!cartItems[id]
              ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=''/>
              :<div className='laptop-item-counter'>
                  <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt=''/>
                  <p>{cartItems[id]}</p>
                  <img onClick={()=>addToCart(id)}  src={assets.add_icon_green} alt="" />
              </div>
          }
        </div>
        <div className="laptop-item-info">
          <div className="laptop-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt=""  />
          </div>
          <p className="laptop-item-desc">{description}</p>
          <p className="laptop-item-price">${price}</p>
        </div>
      
    </div>
  )
}

export default LaptopItem
