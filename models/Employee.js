import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    employeeId: {
      type: String,
      require: true
    },
    fullName: {
      type: String,
      require: true
    },
    email: {
      type: String,
      require: true
    },
    dateOfBirth: {
      type: Date,
      require: true
    },
    technology: {
      type: String,
      require: true
    },
    experience: {
      type: String,
      require: true
    },
    otherSkills: {
      type: String,
      require: true
    }
  },
  { versionKey: false }
);

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;
