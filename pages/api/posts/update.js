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

  const postExists = await Post.findOne({ title });

  if (method === "PUT" && userVerify && postExists) {
    try {
      const newValues = { $set: { title, content, img, slug } };
      await Post.updateOne({ title }, newValues);

      res.status(200).json({ message: "Post Updated" });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
