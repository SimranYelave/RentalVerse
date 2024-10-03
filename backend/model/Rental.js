import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    category:{type:String,required:true},
    image:{type:String,required:true},
    
    
})

const DataModel = mongoose.models.laptop|| mongoose.model("laptop",Schema)

export default DataModel;