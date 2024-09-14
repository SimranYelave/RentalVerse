import React, { useContext } from 'react'
import './LaptopDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import LaptopItem from '../LaptopItem/LaptopItem'


const LaptopDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext)

  return (
    <div className='laptop-display' id='laptop-display'>
      <h2>Available Laptops for Rent</h2>
      <div className="laptop-display-list">
        {food_list.map((item,index)=>{
          if(category==="All" || category===item.category){
            return <LaptopItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
          }
        })}
      </div>

    </div>
  )
}

export default LaptopDisplay
