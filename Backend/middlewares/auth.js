import jwt from "jsonwebtoken";
export const auth = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  console.log("auth token ", token);
  if (!token) {
    return res.sendStatus(401);
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    req.user = user;
    next();
  });
};
