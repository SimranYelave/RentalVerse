import React, {  useState } from 'react'
import "./add.css"
import {assets} from '../../assets/assets'

const Add = ()=>{

    const [image,setImage] =useState(false);
    const [data,setData] = useState({
        name:"",
        description:"",
        price:"",
        category:"Dell"
    })

    const onChangeHandler = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name",data.name)
        formData.append("description",data.description)
        formData.append("price",Number(data.price))
        formData.append("category",data.category)
        formData.append("image",image)
    }


    return(
    <>
    <div className='add'> 

    <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
            <p>Upload Image</p>
            <label htmlFor="image">
             <img src={image?URL.createObjectURL(image):assets.uploadicon} alt=""/>
            </label>


            <input onChange={(e)=>setImage(e.target.files[0])}type="file" id="image"  hidden required/>
        </div>

        <div className='add-product-name flex-col'> 
        <p>Product Name</p>
        <input  onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here'/>
        </div>
        <div className="add-product-description flex-col">
            <p>Product Description</p>
            <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Write content here' required></textarea>
        </div>

        <div className="add-category-price">
            <div className="add-category flex-col">
                <p>Product category</p>
                <select onChange={onChangeHandler} name="category">
                 <option value="Dell">Dell</option>
                 <option value="Lenovo">Lenovo</option>
                 <option value="Apple">Apple</option>
                 <option value="HP">HP</option>
                 <option value="Acer">Acer</option>
                 <option value="Asus">Acer</option>
                 <option value="MSI">MSI</option>
                 <option value="Microsoft Surface">Microsoft Surface</option>
                </select>
            </div>

            <div className="add-price flex-col">

                <p>Product Price</p>
                <input onChange={onChangeHandler} value={data.price} type="Number" name="price" placeholder='$#0'></input>
            </div>
        </div>
        <button type="submit" className='add-button'>ADD</button>
    </form>
    
    </div>
    </>
    )

}

export default Add 