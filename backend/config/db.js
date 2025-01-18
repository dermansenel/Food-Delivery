import mongoose from "mongoose"
import mangoose from "mongoose"

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://dermansenel:123456senel@cluster0.2iegs.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}