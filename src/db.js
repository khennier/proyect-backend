import mongoose from "mongoose";

const connectDB= async () => {
    try {
        await mongoose.connect('mongodb+srv://Khennier:19961412@khennier.d86m0yi.mongodb.net/proyectdb')
        console.log(">>>Db is connected")
    } catch (error) {
        console.log(error)
    }
}

export default connectDB