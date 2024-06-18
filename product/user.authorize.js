import jwt from "jsonwebtoken";
import User from "../user/user.model.js";

const isValidUser = async (req, res, next) => {
  // function objective: to validate token

  // extract authorization from req.headers
  const authorization = req.headers.authorization;

  const splittedValues = authorization?.split(" ");

  const token = splittedValues?.length === 2 ? splittedValues[1] : null;

  // if not token, throw error
  if (!token) {
    return res.status(401).send({ message: "Unauthorized." });
  }

  let payload;
  try {
    const signature = process.env.ACCESS_TOKEN_KEY;

    payload = jwt.verify(token, signature);
  } catch (error) {
    return res.status(401).send({ message: "Unauthorized." });
  }

  // find user using email from payload
  const user = await User.findOne({ email: payload.email });

  if (!user) {
    return res.status(401).send({ message: "Unauthorized." });
  }

  next();
};

export { isValidUser };
