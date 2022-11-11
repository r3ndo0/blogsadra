import dbConnect from "../../../config/dbConnect";

export default async function handler(req, res) {
  await dbConnect();

  //   const token = getCookie("token", { req, res });
  //   const data = jwt.verify(token, process.env.TOKEN_SECRET);
  //   let user = await User.findById(data.userId);
  const user = await getUser(req, res);

  if (user && req.method === "POST") {
    return res.status(201).json({ message: "user Allowed" });
  } else if (!user) {
    return res.status(403).json({ message: "no User" });
  } else {
    return res.status(402).json({ message: "bad Request" });
  }
}
