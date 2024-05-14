import express from "express"
import dotenv from "dotenv"

const app = express();

app.get("/", (req, res)=> {
    res.status(200).json({
        statusCode: 200,
        message: "Server is Working!"
    })
})

app.listen(5000, ()=>{
    console.log("Server is running . . .");
})
