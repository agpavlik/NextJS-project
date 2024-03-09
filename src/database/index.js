import mongoose from "mongoose";

const connectDB = async () => {
  mongoose
    .connect("mongodb+srv://blog:blog@cluster0.txiohcn.mongodb.net/")
    .then(() => console.log("DB connected successfully"))
    .catch((e) => console.log(e));
};

export default connectDB;
