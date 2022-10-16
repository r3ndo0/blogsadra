import Admin from "../../../models/adminUserModel";
import jwt from "jsonwebtoken";
import dbConnect from "../../../config/dbConnect";
import { setCookie } from "cookies-next";

dbConnect();
console.log("DB CONNECTED");

export default async function handler(req, res) {
  const { username, password } = req.body;
  if (req.method === "POST") {
    const user = await Admin.findOne({ username, password });
    if (!user) return res.status(422).json({ message: "Wrong Credentials" });
    const token = jwt.sign({ userId: user._id }, process.env.TOKEN_SECRET, {
      expiresIn: "1d",
    });
    setCookie("token", token, {
      req,
      res,
      maxAge: 60 * 24,
      path: "/",
    });
    res.status(200).json(user);
  } else {
    res.status(424).json({ message: "Invalid Method" });
  }
  // if (!user) {
  //   return res.json({ status: "Not able to find the user" });
  // } else {
  //   // res.status(200).json(user);
  //   res.redirect("/dashboard");
  // }
}

// const { username, password } = req.body;

// const uniqueId = uuidv4();

// try {
//   const user = await Admin.create({
//     user_id: uniqueId,
//     username,
//     password,
//   });
// } catch (error) {
//   res.json(error);
// }
