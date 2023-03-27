import express from "express";

/*
This file contains the routes configuration. 
Each route may contain a action, a request (req) object and a respones (res) object
The request object represents the external information received from the server
The response object represents the information sent by the server
*/

const router = express.Router();
router.get("/workouts", (req, res) => {
  res.status(200).json();
});

router.post("/workouts", ({body}, res) => {

  res.status(200).json();
});
router.get("/test", ({body, params, query}, res) => {
  res.status(200).json();
});

router.put("/workouts", ({body, query}, res) => {
 

  res.status(200).json("Workout Edited");
})

router.delete("/workouts", ({query}, res) => {
  console.log({query})
  res.status(200).json("Workout deleted successfully");
})
export default router;
