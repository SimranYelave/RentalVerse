// creating a basic express server
import express from 'express';
import cors from 'cors';
import {connectDB} from "../backend/config/db.js";// importing the module form another file 
import Router from "../backend/routers/router.js";// importing the module form another file 


//app config 
const app = express();
const port = 4000;

//adding the middleware 
 app.use(express.json()) ;//this will parse data from frontend to backend in json form
 app.use(cors());// using this we can access the backend from frontend
// 
//db connection

connectDB();

//api endpoints
app.use("/api/laptop",Router)
app.use("/images",express.static('uploads'))// due to this uploads folder will be exposed to the /images endpoint


 app.get("/",(req,res)=>{

  res.send("api working")
 })

 app.listen(port,()=>{//running the express server
    console.log(`Server started on ${port}  `)
 })

// mongodb+srv://vam:<db_password>@cluster0.sjgtf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0