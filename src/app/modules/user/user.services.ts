import { TUser } from "./user.interface";
import { User } from "./user.model";
import userValidationSchema from "./validation.zod";

const createUser = async (userData: TUser): Promise<TUser> => {
  const zodValidation = userValidationSchema.parse(userData);
  const result = await User.create(zodValidation);
  return result;
};

const getAllUsers = async (): Promise<any> => {
  const result = await User.find().select({
    userName: 1,
    fullName: 1,
    age: 1,
    email: 1,
    address: 1,
  });
  return result;
};

const getSingleUser = async (id: string): Promise<TUser | null> => {
  const result = await User.findById(id);
  return result;
};

const updateUser = async (
  id: string,
  userData: TUser,
): Promise<TUser | null> => {
  const result = await User.findByIdAndUpdate(id, userData, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteUser = async (id: string): Promise<TUser | null> => {
  const result = await User.findByIdAndDelete(id);
  return result;
};

export const userServices = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};
