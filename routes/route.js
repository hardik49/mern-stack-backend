const router = require("express").Router();

import { addUser, authenticateUser } from "../controllers/UserController";
import {
  getEmployee,
  getEmployeeById,
  updateEmployee,
  addEmployee,
  removeEmployee
} from "../controllers/EmployeeController";

router.post("/signup", addUser);

router.post("/login", authenticateUser);

router.get("/employee", getEmployee);

router.post("/employee", addEmployee);

router.get("/employee/:id", getEmployeeById);

router.put("/employee/:id", updateEmployee);

router.delete("/employee/:id", removeEmployee);

module.exports = router;
