import express from "express";
import dotenv from "dotenv";
import { ConnectDB } from "./conn/ConnectDB.js";
import schoRoutes from "./routes/schoRoutes.js";
import studentRoutes from "./routes/studRoutes.js"


import cors from "cors";

const app = express();
dotenv.config();
app.use(cors());

app.use(express.json());

app.use("/api/scholarship", schoRoutes);
app.use("/api/students", studentRoutes); 


const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
  ConnectDB();
  console.log("Server Started ! at http://localhost:" + PORT);
});