import express from "express";
import { fetchEmployees, addEmployee } from "../controllers/employeeController.js";

const router = express.Router();

router.get("/", fetchEmployees);
router.post("/", addEmployee);

export default router;