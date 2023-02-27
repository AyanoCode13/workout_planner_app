import dotenv from "dotenv"
import server from "./config/server.js"

dotenv.config()

const port = process.env.PORT1 || process.env.PORT2

server.listen(port, ()=>{
    console.log("Listening on port " + port)
})