import mongoose from "mongoose"

const WorkoutSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            default:""
        },
        sets:{
            type:Number,
            default:0
        },
        reps:{
            type:Number,
            default:0
        },
        day:{
            type:String,
            default:"Monday"
        },
        date:{
            type:Date,
            default:Date.now()
        }
    }
)

export const WorkoutsModel = new mongoose.model("Workouts", WorkoutSchema)