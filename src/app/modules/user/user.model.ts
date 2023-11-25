import bcrypt from "bcrypt";
import { Schema, model } from "mongoose";

import config from "../../config";
import { IAddress, IFullName, IUser } from "./user.interface";

const fullNameSchema = new Schema<IFullName>({
  fastName: {
    type: String,
    required: [true, "First Name is required"],
  },
  lastName: {
    type: String,
    required: [true, "Last Name is required"],
  },
});

const addressSchema = new Schema<IAddress>({
  street: {
    type: String,
    required: [true, "Street Name is required"],
  },
  city: {
    type: String,
    required: [true, "City Name is required"],
  },
  country: {
    type: String,
    required: [true, "Country Name is required"],
  },
});

const userSchema = new Schema<IUser>({
  userId: {
    type: Number,
    required: [true, "Id is required and must be unique"],
    unique: true,
  },
  userName: {
    type: String,
    required: [true, "User Name is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    trim: true,
  },
  fullName: {
    type: fullNameSchema,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  hobbies: {
    type: [String],
  },
  address: {
    type: addressSchema,
    required: [true, "Address is required"],
  },
});

userSchema.pre("save", async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_sault_round),
  );
  next();
});

userSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

export const User = model<IUser>("User", userSchema);
