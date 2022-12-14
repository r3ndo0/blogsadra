import dbConnect from "../../../config/dbConnect";
import User from "../../../models/userModel";
import Post from "../../../models/postModel";

export default async function handler(req, res) {
  await dbConnect();
  const { method } = req;
  const { title, content, img, slug, user } = req.body;
  const { username, password } = user;
  const userVerify = await User.findOne({ username, password });
  if (!userVerify) {
    return res.status(403).json({ message: "Not authorized" });
  }

  if (method === "POST" && userVerify) {
    try {
      const postExists = await Post.findOne({ title });

      if (postExists) {
        return res.status(422).json({ message: "Post already exists" });
      }
      const post = new Post({ title, content, img, slug });
      await post.save();
      res.status(201).json({ message: "Post Created" });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
