import userModel from "../model/usermodel.js";

// adding items to user function
const addtoCart = async (req,res)=>{
    try {
        // Find the user by their ID
        const userData = await userModel.findById(req.body.userId);
    
        // Check if user exists
        if (!userData) {
            return res.status(404).json({ message: 'User not found' });
        }
    
        // Initialize cartData if it's undefined
        let cartData = userData.cartData || {};
    
        // Update cartData
        if (cartData[req.body.itemId]) {
            cartData[req.body.itemId] += 1;
        } else {
            cartData[req.body.itemId] = 1;
        }
    
        // Update the user's cartData in the database
        await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    
        res.json({ message: 'Added to cart' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


// removing items from user cart

const removefromCart = async (req,res)=>{
   try{
      let UserData = await userModel.findById(req.body.userId)
      let cartData = await UserData.cartData
      if(cartData[req.body.itemId]>0){
        cartData[req.body.itemId] -= 1;
      }

      await userModel.findByIdAndUpdate(req.body.userId,{cartData});
      res.json({msg:"removed from cart"})
   }catch(error){
    console.log(error)
    res.json({msg:"error you are noob give up"})
   }
}

// fetch user cart data

const getCart = async (req,res)=>{
  try{

    let userData = await userModel.findById(req.body.userId)
    let cartData = await userData.cartData;
    res.json({Success:true,msg:cartData})
  }
  catch(error){
    console.log(error)
    res.json({msg:error})
  }
}

export {addtoCart,removefromCart,getCart}