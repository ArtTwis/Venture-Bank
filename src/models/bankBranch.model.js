import mongoose from "mongoose";

const BankBranchSchema = new mongoose.Schema(
  {
    accountId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Account",
    },
    branchId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Branch",
    },
  },
  {
    timestamps: true,
  }
);

export const BankBranch = mongoose.model("BankBranch", BankBranchSchema);
