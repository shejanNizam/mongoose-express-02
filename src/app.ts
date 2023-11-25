import cors from "cors";
import express, { Application, Request, Response } from "express";
import { userRoutes } from "./app/modules/user/user.route";
const app: Application = express();

// Parser
app.use(express.json());
app.use(cors());

app.use("/api", userRoutes);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Server is running successfully!",
  });
});

export default app;
