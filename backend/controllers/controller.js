import DataModel from "../model/Rental.js";
import fs from 'fs'

// adding the items 

const addItems = async(req,res)=>{

   console.log("Incoming request body:", req.body);
     // creating logic to get image name and store it 
     // This all will be used in entering for Thunderclient
   



     let Image_filename = `${req.file.filename}`;
     const laptop = new DataModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:Image_filename
     })

     try{
        await laptop.save();
        res.json({success:true,message:"Item added"})
       }
       catch(error){
        console.log(error)
        res.json({success:false,message:"Error! YOU ARE A NOOB"})

       }
    }

// creating allItems list

const listItems = async(req,res)=>{
     try{
      const items = await DataModel.find({});
      res.json({success:true,data:items})
     }
     catch(error){
      console.log(error)
      res.json({success:false,data:items})



     }
}

// removing item 
const removeitem= async (req,res)=>{
     try{
      const item = await DataModel.findById(req.body.id);
      fs.unlink(`uploads/${item.image}`,()=>{})
       await DataModel.findByIdAndDelete(req.body.id);
       res.json({success:true,message:"item removed"})
     }
     catch(error){
      console.log(error)
      res.json({success:false,message:"item removed"})
     }
}

export {addItems,listItems,removeitem}