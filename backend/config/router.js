import express from "express";

/*
This file contains the routes configuration. 
Each route may contain a action, a request (req) object and a respones (res) object
The request object represents the external information received from the server
The response object represents the information sent by the server
*/

const router = express.Router();
router.get("/workouts", (req, res) => {
  res.status(200).json("Hello World");
});
router.post("/workouts", (req, res) => {
  res.status(200).json("Workout added successfully");
});

router.put("/workouts", (req, res) => {
  res.status(200).json("Workout edited successfully");
})

router.delete("/workouts", (req, res) => {
  res.status(200).json("Workout deleted successfully");
})
export default router;
