import express from "express";
import mongoose from "mongoose";
import Route from "./routes/Route.js";
 
import { MongoClient } from "mongodb"
import cors from "cors";

const app=express();
const port =6892;

const database=`mongodb://localhost:27017`;
 async function Connecting()
 {
    try{
         const connect=mongoose.connect(database);
         
    }
    catch(e)
    {
        console.log(e);
    }
 }
 app.use(cors(
    {
    origin:'http://localhost:3000',  // Your React frontend URL
    credentials: true
    }
));
 app.use(express.json());
 
 app.use("/api/auth",Route)
 Connecting()
 .then(()=>
{

    app.listen(port,()=>{
        console.log(`we are   on the ${port}`);
        console.log(database)
    })

})
.catch((e)=>
{
    console.log(e);
    
})
 