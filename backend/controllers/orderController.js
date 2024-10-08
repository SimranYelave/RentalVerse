import orderModel from "../model/orderModel.js";
import userModel from "../model/usermodel.js";
import Stripe from 'stripe'


const stripe = new Stripe('process.env.STRIPE_SEC_KEY')
//placing order for frontend

const PlaceOrder = async(req,res)=>{

    const frontend_url = "http://localhost:5173"
    try{
        const newOrder = new orderModel({
            userId:req.body.userId,
            items:req.body.items,
            amount:req.body.amount,
            address:req.body.address
        })

        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}});

        const line_Items = req.body.items.map((i)=>({
            price_data:{
                currency:"inr",
                product_data:{
                    name:item.name
                },
                unit_amount:item.price*100*80

            },quantity:item.quantity
        }))
        line_Items.push({
            price_data:{
                 currency:"inr",
                 product_data:{
          name:"Delivery charges"
                 },unit_amount:2*100*80
            },quantity:1
        })
        
        const session = await stripe.checkout.sessions.create({
            line_Items:line_Items,
            mode:'payment',
            success_url:`${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            caancel_url:`${frontend_url}/verify?success=false&orderId=${newOrder._id}`

        })

        res.json({session_url:session_url})
    }
    catch(error){
       console.log(error)
       res.json({msg:"error"})
    }
}

export {PlaceOrder}