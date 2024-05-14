import express from "express"
import User from "../model/User.js";
import bcrypt from "bcrypt"

const router = express.Router();

router.post("/new", async (req, res, next) => {
    try {

        const { name, email, ProfileIMG, DOB, gender, password } = req.body;

        if (!name, !email, !password, !DOB, !gender) return next(400, "bad req!");

        const hash = bcrypt.hashSync(password, 10)

        const NewUser = await User.create({
            name,
            email,
            ProfileIMG,
            gender,
            DOB,
            password: hash
        })

        res.status(200).json(`Welcome ${NewUser.name}`)

    } catch (error) {
        next(error)
    }
})

export default router