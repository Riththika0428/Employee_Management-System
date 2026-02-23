import { getAllEmployees, createEmployee } from "../models/employeeModel.js";

export const fetchEmployees = async (req, res) => {
  try {
    const employees = await getAllEmployees();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addEmployee = async (req, res) => {
  try {
    const result = await createEmployee(req.body);
    res.status(201).json({ message: "Employee Added", result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};