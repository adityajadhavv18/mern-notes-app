import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import healthRoutes from "./routes/health.routes";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/health", healthRoutes);

// global 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Not Found" });
});

export default app;
