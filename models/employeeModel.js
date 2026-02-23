import db from "../config/db.js";

export const getAllEmployees = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM employees", (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

export const createEmployee = (employee) => {
  return new Promise((resolve, reject) => {
    const { name, email, position, salary } = employee;

    db.query(
      "INSERT INTO employees (name, email, position, salary) VALUES (?, ?, ?, ?)",
      [name, email, position, salary],
      (err, result) => {
        if (err) reject(err);
        resolve(result);
      }
    );
  });
};