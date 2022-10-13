import Post from "../../../models/postModel";
import dbConnect from "../../../config/dbConnect";

export default async function handler(req, res) {
  const { method } = req;

  dbConnect();
  console.log("DB Connected");

  if (method === "GET") {
    try {
      const posts = await Post.find();
      res.status(200).json(posts);
      console.log(posts);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  if (method === "POST") {
    try {
      const post = await Post.create(req.body);
      res.status(201).json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
