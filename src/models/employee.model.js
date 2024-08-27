import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema(
  {
    userAuthId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserAuth",
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    familyName: {
      type: String,
      required: true,
      trim: true,
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    position: {
      type: String,
      enum: ["Manager", "Cashier", "Staff"],
      required: true,
      default: "Staff",
    },
    hireDate: {
      type: Date,
      default: Date.now,
    },
    lastWorkingDate: {
      type: [Date],
      default: null,
    },
    addressId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
    },
  },
  {
    timestamps: true,
  }
);

export const Employee = mongoose.model("Employee", EmployeeSchema);
