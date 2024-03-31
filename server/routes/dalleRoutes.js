import express from "express";
import * as dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();
const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.route("/").get((req, res) => {
  res.send("Hello from DALL-E! : dalleRoutes.js");
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;
    const aiResponse = await openai.images.generate({
      prompt,
      n: 1,
      size: "1024x1024",
    });

    const image = aiResponse.data[0];
    res.status(200).json({ photo: image });
  } catch (error) {
    console.log(error + " \n line no 32");
    res.status(500).send(error?.response.data.error.message);
  }
});

export default router;
