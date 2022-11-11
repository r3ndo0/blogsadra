import dbConnect from "../../../config/dbConnect";
import Post from "../../../models/postModel";
import slugify from "../../../config/slugify";

// export default async function handler(req, res) {
//   await dbConnect();
//   console.log("DB CONNECTED");
//   const { title, content, img } = req.body;

//   const slug = slugify(title);

//   if (req.method === "POST") {
//     const postExists = await Post.findOne({ slug });
//     if (postExists) {
//       return res.status(422).json({ message: "Post already exists" });
//     }
//     const post = new Post({ title, content, img, slug });
//     await post.save();
//     res.status(201).json({ message: "Post Created" });
//   }
//   if (req.method === "GET")
//     try {
//       const posts = await Post.find();
//       res.status(200).json(posts);
//     } catch (error) {
//       res.status(500).json(error);
//     }
//   // else {
//   //   res.status(424).json({ message: "درخواست نامعتبر!" });
//   // }
// }
export default async function handler(req, res) {
  const { method } = req;
  const { title } = req.body;

  dbConnect();

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
      const postExists = await Post.findOne({ title });
      if (postExists) {
        return res.status(422).json({ message: "Post already exists" });
      }
      const post = new Post(req.body);
      await post.save();
      res.status(201).json({ message: "Post Created" });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
