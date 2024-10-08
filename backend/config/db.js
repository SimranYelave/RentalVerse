import mongoose from 'mongoose';

export const connectDB = async () => {

    await mongoose.connect('mongodb+srv://vmarri:Password@cluster0.jionv.mongodb.net/Rentalverse').then(()=>console.log("DB connected"))
}

