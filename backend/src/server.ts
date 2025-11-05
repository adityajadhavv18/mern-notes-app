import app from "./app";
import config from "./config";
import { connectDB } from "./loaders/mongo";

const port = config.port;

const start = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server listening on http://localhost:${port}`);
    });
  } catch (err) {
    console.error("Failed to start server", err);
    process.exit(1);
  }
};

start();
