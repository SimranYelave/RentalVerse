import React, { useContext, useEffect ,useState} from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets';


const PlaceOrder = () => {

  const {getTotalCartAmount,token,Item_list,cartItem,url} = useContext(StoreContext)

  const [data,setData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  useEffect(()=>{
    console.log(data);
  },[data])


  const placeOrder = async (event)=>{
      event.preventdefault();// this will save data during refreshing
      let orderItems=[];
       
      try{

        Item_list.map((item)=>{
          if(cartItem[item._id]>0){
            let itemInfo = item;
            itemInfo["quantity"]=cartItem[item._id];
            orderItems.push(itemInfo)
          }
        })
        
        console.log(orderItems)
      }catch(error){
        console.log(error)
      }
  }





  const onChangeHandler = (event)=>{
    const name = event.target.name;
    const value= event.target.value;
    setData(data=>({...data,[name]:value}))
  }
  return (
    <form onSubmit={placeOrder} className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First Name'  />
          <input name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='last Name'  />
        </div>
        <input name ='email' type="email" onChange={onChangeHandler} value={data.email} placeholder='Email address' />
        <input  name ='street' type="text"  onChange={onChangeHandler} value={data.street} placeholder='Street' />
        <div className="multi-fields">
          <input name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='City'  />
          <input name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='State'  />
        </div>
        <div className="multi-fields">
          <input name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='Zip code'  />
          <input name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='Country'  />
        </div>
        <input name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
          <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
           
           <div className="pay">

          {/* <button className="btns" id="btn-1">
          <img src={assets.cred} alt="paypal"></img>
          </button >
          <button className="btns" id="btn-2">
          <img src={assets.pal} alt="debit_card"></img>
          </button> */}
          <button type='submit' className="btns" id="btn-3">
          pay
          </button>
         
           </div>

        </div>

      </div>
      
    </form>
  )
}

export default PlaceOrder
