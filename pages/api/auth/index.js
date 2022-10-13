import Admin from "../../../models/adminUserModel";
import dbConnect from "../../../config/dbConnect";

dbConnect();
console.log("DB CONNECTED");

export default async function handler(req, res) {
  const { username, password } = req.body;
  const user = await Admin.findOne({ username, password });
  if (!user) {
    return res.json({ status: "Not able to find the user" });
  } else {
    // res.status(200).json(user);
    res.redirect("/dashboard");
  }
}
