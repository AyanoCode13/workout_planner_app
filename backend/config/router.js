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
export default router;
