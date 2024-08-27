import mongoose from "mongoose";

const ComplaintSchema = new mongoose.Schema(
  {
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserAuth",
    },
    complaintDate: {
      type: Date,
      default: Date.now(),
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["Open", "In Progress", "Resolved"],
    },
    assignedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserAuth",
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserAuth",
    },
    resolutionDate: {
      type: Date,
      default: null,
    },
    resolutionDetail: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export const Complaint = mongoose.model("Complaint", ComplaintSchema);
