import mongoose from "mongoose";
import { errorMessages } from "../constant/errorMessage";

const AccountSchema = new mongoose.Schema(
  {
    accountHolderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "",
    },
    accountHolderType: {
      type: String,
      enum: ["Customer", "Employee"],
      required: true,
    },
    accountNumber: {
      type: String,
      required: true,
      unique: [true, errorMessages.uniqueFieldRequired],
    },
    accountType: {
      type: String,
      enum: ["Current", "Saving"],
      required: true,
    },
    accountBalance: {
      type: Number,
      default: 0,
    },
    bankBranchId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BankBranch",
    },
    openingDate: {
      type: Date,
      default: Date.now(),
    },
    closingDate: {
      type: [Date],
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export const Account = mongoose.model("Account", AccountSchema);
