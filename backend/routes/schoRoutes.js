import express from "express";
import {
  getAllScholarships,
  createScholarship,
  applyForScholarship
} from "../controllers/schoController.js";  
import { createStudent } from "../controllers/studentController.js";


const router = express.Router();

router.get("/", getAllScholarships); 
router.post("/", createScholarship); 
router.post("/apply", applyForScholarship); 

router.post("/", createStudent);



// Route for students
export default router;
