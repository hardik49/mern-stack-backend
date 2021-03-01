import jwt from "jsonwebtoken";

import Users from "../models/User";
import { successResponse, errorResponse } from "../utility/helper";

export const getUser = async (_, res) => {
  try {
    const userDetails = await Users.find({});
    return successResponse(res, userDetails);
  } catch (err) {
    return errorResponse(res, "User does not exists!");
  }
};

export const addUser = async (req, res) => {
  const User = new Users(req.body);
  try {
    await User.save();
    return successResponse(res);
  } catch (err) {
    return errorResponse(res, "User can not created!");
  }
};

export const authenticateUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const isUserExists = await Users.findOne({ email, password });

    if (isUserExists) {
      const token = jwt.sign({ isUserExists }, process.env.SECRET_KEY, {
        expiresIn: "600s",
      });
      return successResponse(res, token);
    } else {
      return errorResponse(res, "User Does not Exists!");
    }
  } catch (err) {
    return errorResponse(res, "Can not find user!");
  }
};
