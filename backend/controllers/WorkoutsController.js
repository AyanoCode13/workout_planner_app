import { WorkoutsModel } from "../models/WorkoutsModel.js"
export const getWorkouts = async (req, res)=>{
    res.status(200).json(await WorkoutsModel.find(req.query))
}
export const addWorkout = async (req, res)=>{
    await WorkoutsModel.create(req.body)
    res.status(200).json("Workouts added")
}
export const editWorkout = async (req, res)=>{
    console.log(req.query)
    await WorkoutsModel.findOneAndUpdate({_id:req.query._id}, req.body)
    res.status(200).json("Workouts added")
}
export const deleteWorkout = async (req, res)=>{
    await WorkoutsModel.findOneAndDelete({_id:req.query._id})
    res.status(200).json("Workouts deleted")
}