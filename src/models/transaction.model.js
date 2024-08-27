import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      default: "",
    },
    status: {
      type: String,
      enum: ["Pending", "Completed", "Failed"],
      required: true,
      trim: true,
    },
    transactionMethod: {
      type: String,
      enum: ["Cash", "Bank Transfer", "Card"],
      required: true,
      trim: true,
    },
    transactionType: {
      type: String,
      enum: ["Deposit", "Withdrawal"],
      required: true,
      trim: true,
    },
    transactionDate: {
      type: Date,
      default: Date.now(),
    },
    bankFee: {
      type: Number,
      default: 0,
    },
    tags: {
      type: String,
      trim: true,
    },
    accountId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Account",
    },
  },
  {
    timestamps: true,
  }
);

export const Transaction = mongoose.model("Transaction", TransactionSchema);
