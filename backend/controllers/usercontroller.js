import userModel from "../model/usermodel";
import fs from 'fs'
import jwt from 'jsonwebtoken'
import bycrypt from 'bcrypt'
import validator from 'validator'

//login user
const loginUser = async (req,res)=>{
    // creating a logic 
}

//register user 

const SignUser = async (req,res)=>{

    const{name,email,password}=req.body;
    try{
        // checking if user already exits
        const exits = await userModel.findOne({email});
        if(exits){
            return res.json({success:false,message:"user already exits"})
        }
        console.log(`${email} already exits`)
        // validating

        if(validator.isEmail(email)){
            return res.json({success:false,message:"please enter a valid email id"})
        }else{
            return res.json({success:true,message:"stfu"})
           
        }
    }catch(error){
        console.log(error)

    }
    
}


export{loginUser,SignUser}