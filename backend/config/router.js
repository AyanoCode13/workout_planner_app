import express from "express";
import workouts from "../db/workouts.js"

/*
This file contains the routes configuration. 
Each route may contain a action, a request (req) object and a respones (res) object
The request object represents the external information received from the server
The response object represents the information sent by the server
*/

const router = express.Router();
router.get("/workouts", (req, res) => {
  res.status(200).json(workouts.find(workout=>workout._id === req.query._id));
});
router.post("/workouts", ({body}, res) => {
  workouts.push(body)
  res.status(200).json(workouts);
});

router.put("/workouts", ({body, query}, res) => {
  console.log(body)
  console.log(query)
  let updated_workout = workouts.find(workout=>workout._id === query._id) // identifying the wokrout to edit
  updated_workout = body // edit the workouts
  const updated_workouts = workouts.filter(workout=>workout._id !== query._id)

  res.status(200).json([...updated_workouts, updated_workout]);
})

router.delete("/workouts", ({query}, res) => {
  console.log({query})
  res.status(200).json("Workout deleted successfully");
})
export default router;
