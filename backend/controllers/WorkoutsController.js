import { WorkoutsModel } from "../models/WorkoutsModel.js"
export const getWorkouts = async (req, res)=>{
    res.status(200).json("All workouts")
}
export const addWorkout = async (req, res)=>{
    await WorkoutsModel.create(req.body)
    res.status(200).json("Workouts added")
}
export const editWorkout = async (req, res)=>{
    res.status(200).json("Workouts added")
}
export const deleteWorkout = async (req, res)=>{
    await WorkoutsModel.findOneAndDelete({_id:req.query._id})
    res.status(200).json("Workouts deleted")
}