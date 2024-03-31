import express from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary"; //to save images online
import Post from "../mongodb/models/posts.js";

dotenv.config();

const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECREAT_KEY,
});

//get all posts
router.route("/").get(async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json({ success: true, data: posts });
  } catch (error) {
    console.log("500 error occured : PostRoute>22" + error.message);

    res.status(500).json({ success: true, message: error });
  }
});

//create post route
router.route("/").post(async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;
    console.log("Request Body:", JSON.stringify(req.body));

    const photourl = await cloudinary.uploader.upload(photo);
    const newPost = await Post.create({
      name,
      prompt,
      photo: photourl.url,
    });
    console.log("Newly created Post postRoutes>35" + newPost);

    res.status(201).json({ success: true, data: newPost });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
});

export default router;
