import express, { application } from "express";
import dotenv from "dotenv";
import useRoute from "./routes/auth.route.js";
import connectMongodb from "./db/connectMongodb.js";
const app = express();
const port = 5000
dotenv.config()
app.listen(port,()=>{
    console.log(`visit to see app: http://localhost:${port}`)
    connectMongodb();
})
app.get('/',(req,res)=>{
    res.send("hellow mota bhai")
})
app.use('/api/auth',useRoute)