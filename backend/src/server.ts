import express, { Request, Response} from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

// Import all routes here
import notesRoutes from "./routes/notesRoutes";

// Configure environment variables
dotenv.config();

const app = express();
app.use(express.json());
// Use middleware that allows for access from other domains
app.use(cors());
// for logging errors
app.use(morgan("dev"));

app.get("/", (req: Request, res: Response) => {
  res.send("hi");
});

// Use all routes
app.use("/notes", notesRoutes); // Sample routes

// Run server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT} 🚀`);
});