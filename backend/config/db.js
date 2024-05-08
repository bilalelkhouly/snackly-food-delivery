import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://bilalelkhouly:Boula2003@cluster0.plbi9tk.mongodb.net/food-delivery').then(() => console.log("DB Connected"));
}