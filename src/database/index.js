import mongoose from "mongoose";

const connectDB = async () => {
  mongoose
    .connect("mongodb+srv://olekpavlyk:qwerty@cluster0.mrsj9f2.mongodb.net/")
    .then(() => console.log("DB connected successfully"))
    .catch((e) => console.log(e));
};

export default connectDB;
