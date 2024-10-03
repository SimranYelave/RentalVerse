import express from 'express'
import {addItems, listItems,removeitem} from '../controllers/controller.js'
import multer from 'multer'

const Router = express.Router();

//Image Storage Engine

const storage = multer.diskStorage({// this is for storage purpose
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }


})

const upload = multer({storage:storage})//in this the image will be stored

Router.post("/add",upload.single("image"),addItems) // this will add the item into the database
Router.get("/list",listItems) // this is endpoint // this is similar to select *
Router.post("/remove",removeitem)


export default Router;