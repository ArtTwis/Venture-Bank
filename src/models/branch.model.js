import mongoose from "mongoose";

const BranchSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: [String],
      required: true,
      trim: true,
    },
    ifscCode: {
      type: String,
      required: true,
      unique: true,
      trim: true,
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

export const Branch = mongoose.model("Branch", BranchSchema);
