import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";

import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

//this func pulls the secret keys from the .env file
dotenv.config();

const app = express(); // func
app.use(cors()); //func
app.use(express.json({ limit: "50mb" })); //func

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

app.get("/", async (req, res) => {
  res.send("Hello from DALL-E : index.js");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () =>
      console.log("server has started on port http://localhost:8080")
    );
  } catch (error) {
    console.log(error + "err occured on server : index.js");
  }
};

startServer();

//Front end is completed img generation successful is and fetching as well. building community UI and logic
