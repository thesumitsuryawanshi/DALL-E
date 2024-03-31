import mongoose from "mongoose";

//connecting with Mongoose
const connectDB = (url) => {
  mongoose.set("strictQuery", true);

  mongoose
    .connect(url)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err + "error Occured :connect.js"));
};

export default connectDB;
