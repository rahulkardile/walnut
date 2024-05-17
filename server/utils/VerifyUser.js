import jwt from "jsonwebtoken";
import { ErrorHandler } from "./ErrorHandler.js";

const verifyUser = (req, res, next)=> {
    const token = req.cookies.walnut_user;
    if(!token) return next(ErrorHandler(404, "User is not Authenticated!"));

    jwt.verify(token, process.env.JWT_SECRET, (err, user)=>{
        if(err) return next(ErrorHandler(400, "Invalid cookies!"));

        req.user = user;
        next();
    })
}

export default verifyUser;
