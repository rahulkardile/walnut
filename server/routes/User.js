import express from "express"
import User from "../model/User.js";
import bcrypt from "bcrypt"
import { ErrorHandler } from "../utils/ErrorHandler.js";

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

router.post("/get", async (req, res, next) => {
    try {

        const { email, password } = req.body;
        
        if (!email || !password) {
            if (!email) {
                next(ErrorHandler(404, "Email is Missing!"))
            }
            if (!password) {
                next(ErrorHandler(404, "Password is Missing!"))
            }
        }

        const GetUser = await User.findOne({
            email: email
        })

        if(!GetUser){
            next(ErrorHandler(404, "Please Provide Valid Credencials!"))
        }

        const { password: pass, createdAt, updatedAt, __v, ...rest } = GetUser._doc

        res.status(200).json({
            message: `Welcome Back ${GetUser.name}`,
            data: rest
        })

    } catch (error) {
        next(error);
    }
})


export default router