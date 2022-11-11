import dbConnect from "../../../config/dbConnect";
import User from "../../../models/userModel";
import jwt from "jsonwebtoken";
import { setCookies } from "cookies-next";
export default async function handler(req, res) {
  await dbConnect();

  const { username, password } = req.body;

  if (req.method === "POST") {
    const user = await User.findOne({ username, password });

    // if (req.rawHeaders[25] !== `${uri}/login`) {
    //   return res.status(401).json({ message: "!!" });
    // }
    if (!user) return res.status(422).json({ message: "Wrong Credentials" });

    const token = jwt.sign({ userId: user._id }, process.env.TOKEN_SECRET, {
      expiresIn: "1d",
    });

    setCookies("token", token, {
      req,
      res,
      maxAge: 60 * 60 * 24, // 1 day
      path: "/",
    });

    res.status(200).json(user);
  } else {
    res.status(424).json({ message: "!!" });
  }
}
