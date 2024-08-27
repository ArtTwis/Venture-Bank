/* eslint-disable no-undef */
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { errorMessages } from "../constant/errorMessage";
import { SALT } from "../constant/common";
import jwt from "jsonwebtoken";

const UserAuthSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: [true, errorMessages.userIdFieldRequired],
      unique: [true, errorMessages.uniqueFieldRequired],
      trim: true,
    },
    email: {
      type: String,
      required: [true, errorMessages.emailFieldRequired],
      unique: true,
      trim: true,
    },
    hash: {
      type: String,
      required: [true, errorMessages.hashFieldRequired],
      trim: true,
    },
    accessToken: {
      type: [String],
      default: null,
    },
    refreshToken: {
      type: [String],
      default: null,
    },
    isOperational: {
      type: Boolean,
      default: false,
    },
    isAccountApproved: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

UserAuthSchema.pre("save", async function (next) {
  if (this.isModified("hash")) {
    this.hash = await bcrypt.hash(this.hash, SALT);
  }
  next();
});

UserAuthSchema.methods.isPasswordCorrect = async function (hash) {
  return await bcrypt.compare(hash, this.hash);
};

UserAuthSchema.methods.generateAccessToken = async function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};

UserAuthSchema.methods.generateRefreshToken = async function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};

export const UserAuth = mongoose.model("UserAuth", UserAuthSchema);
