import dbConnect from "../../../config/dbConnect";
import Post from "../../../models/postModel";

export default async function handler(req, res) {
  const { method } = req;

  dbConnect();

  if (method === "GET") {
    try {
      const posts = await Post.find();
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
