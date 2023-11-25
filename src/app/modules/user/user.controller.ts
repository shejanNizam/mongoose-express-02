import { Request, Response } from "express";
import { userServices } from "./user.services";

const createUser = async (req: Request, res: Response) => {
  try {
    const { user: userData } = req.body;

    const result = await userServices.createUser(userData);
    res.status(200).json({
      success: true,
      message: "User created successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllUsers();
    res.status(200).json({
      success: true,
      message: "All users get successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Users not found",
    });
  }
};

const gateSingleUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;
    console.log(id);
    const result = await userServices.getSingleUser(id);
    res.status(200).json({
      success: true,
      message: "User is retrieved successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: "User not found",
      error: {
        code: 404,
        description: "User not found!",
      },
    });
  }
};
const updateUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;
    const data = req.body;
    const result = await userServices.updateUser(id, data);
    res.status(201).json({
      success: true,
      message: "User updated successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: "User not found",
      error: {
        code: 404,
        description: "User not found!",
      },
    });
  }
};
const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;
    await userServices.deleteUser(id);
    res.status(201).json({
      success: true,
      message: "User deleted successfully!!",
      data: null,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "User not found",
      error: {
        code: 404,
        description: "User not found!",
      },
    });
  }
};
export const userController = {
  createUser,
  getAllUsers,
  gateSingleUser,
  updateUser,
  deleteUser,
};
