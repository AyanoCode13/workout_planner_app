import express from "express";

/*
This file contains the routes configuration. 
Each route may contain a action, a request (req) object and a respones (res) object
The request object represents the external information received from the server
The response object represents the information sent by the server
*/
import { getWorkouts, addWorkout, editWorkout, deleteWorkout } from "../controllers/WorkoutsController.js";

const router = express.Router();
router.get("/workouts", getWorkouts);

router.post("/workouts", addWorkout);

router.put("/workouts", editWorkout)

router.delete("/workouts",deleteWorkout)
export default router;
