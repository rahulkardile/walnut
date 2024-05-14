import express from "express"

const router = express.Router();

router.get("/get", async(req, res, next)=>{
    res.send("user got")
})

export default router