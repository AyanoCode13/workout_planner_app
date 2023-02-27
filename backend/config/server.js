import cors from "cors"
import express from "express"
import router from "./router.js"

/*
This file contains the server configuration
The server uses "cors" that enables cross-origin requests
It uses express server and express.json() to parse json objects
It uses "/api/v1/" as a base path and the router that provides the routes configuration
*/

const server = express()
server.use(express.json())
server.use(cors())
server.use("/api/v1", router)

export default server