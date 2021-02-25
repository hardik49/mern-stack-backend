import jwt from "jsonwebtoken";

import { errorResponse } from "../utility/helper";
const apiAuth = (req, res, next) => {
  if (!(req.headers && req.headers.authorization))
    return errorResponse(res, "Token is not provided!");

  const token = req.headers.authorization;
  try {
    const decryptToken = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decryptToken.isUserExists;
    return next();
  } catch (err) {
    return errorResponse(res, "Token exprired");
  }
};

export default apiAuth;
