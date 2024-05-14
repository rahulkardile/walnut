import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

import User from "./routes/User.js"

const app = express();
app.use(express.json());

dotenv.config();
const PORT = process.env.PORT || 5000
const MONGO_URL = process.env.MONGO_URL

try {
    mongoose.connect(MONGO_URL);
    console.log("Database is connected");
} catch (error) {
    console.log("Database connectivity error!");
}

app.get("/", (req, res)=> {
    res.status(200).json({
        statusCode: 200,
        message: "Server is Working!"
    })
})

app.use("/api/user", User)

app.listen(5000, ()=>{
    console.log("Server is running . . .");
})

// authore date title images freture_img author content commentbox category *recent post