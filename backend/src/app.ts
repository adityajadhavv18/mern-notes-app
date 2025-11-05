import "dotenv/config";
import express from "express";
import cors from "cors";
import healthRoutes from "./routes/health.routes";
import noteRoutes from "./routes/note.routes";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/health", healthRoutes);
app.use("/api/notes", noteRoutes);

// global 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Not Found" });
});

export default app;
