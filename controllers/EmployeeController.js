import Employee from "../models/Employee";
import { errorResponse, successResponse } from "../utility/helper";

export const getEmployee = async (_, res) => {
  try {
    const employeeDetails = await Employee.find({});
    return successResponse(res, employeeDetails);
  } catch (err) {
    return errorResponse(res, "Can not find employee!");
  }
};

export const addEmployee = async (req, res) => {
  const employee = new Employee(req.body);
  try {
    await employee.save();
    return successResponse(res);
  } catch (err) {
    return errorResponse(res, "Can not create employee!");
  }
};

export const removeEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    await Employee.remove({ _id: id });
    return successResponse(res);
  } catch (err) {
    return errorResponse(res, "Can not delete employee!");
  }
};

export const getEmployeeById = async (req, res) => {
  const { id } = req.params;
  try {
    const employeeDetails = await Employee.findOne({ _id: id });
    return successResponse(res, employeeDetails);
  } catch (err) {
    return errorResponse(res, "Can not find employee!");
  }
};

export const updateEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    await Employee.updateOne({ _id: id }, { ...req.body });
    return successResponse(res);
  } catch (err) {
    return errorResponse(res, "Can not find employee!");
  }
};
