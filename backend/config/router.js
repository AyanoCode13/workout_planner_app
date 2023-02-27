import express from 'express';

const router = express.Router();

router.get("/workouts", (req, res)=>{
    res.status(200).json("All Workouts");
})

export default router