import dotnev from "dotenv"
import server from "./config/server.js"
import mongoose from "mongoose" 

/*
This file contains the server and the eviroment variables
*/

// Configure the eviroment variables
dotnev.config() 

// It uses PORT2 as backup port in case PORT1 is used by another application
const port = process.env.PORT1 || process.env.PORT2 

//Listens to the server and uses a callback function to display the connection message 
server.listen(port , ()=>{
    console.log("Listening on port " + port)
})