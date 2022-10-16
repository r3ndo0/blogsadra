import { getCookie } from "cookies-next";
import jwt from "jsonwebtoken";
import Admin from "../models/adminUserModel";

export default async function getUser(req, res) {
  const token = getCookie("token", { req, res });

  try {
    const data = jwt.verify(token, process.env.TOKEN_SECRET);
    let user = await Admin.findById(data.userId);
    user = JSON.parse(JSON.stringify(user));
    return user;
  } catch (error) {
    return null;
  }
}
