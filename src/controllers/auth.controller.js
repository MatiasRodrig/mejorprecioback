import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { createAccessToken } from "../libraries/jwt.js";


export const register = async (req, res) => {
    const { nombre, apellido, email, password } = req.body

    const passwordHash = await bcrypt.hash(password, 10)

    try {
        const newUser = new User(
            {
                nombre,
                apellido,
                email,
                password: passwordHash
            }
        )

        const savedUser = await newUser.save()

        // Token

        const token = await createAccessToken({
            id: savedUser._id,
        });

        // Cookies

        res.cookie("token", token);


        // Respuesta
        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
        });
    }

    catch (err) {
        res.status(500)
    }

}

export const login = async (req, res) => {
    const { email, password } = req.body
    try {

        const userFound = await User.findOne({ email })

        if (!userFound) return res.status(400)

        const passwordCorrect = await bcrypt.compare(password, userFound.password)

        if (!passwordCorrect) return res.status(401)

        // Token

        const token = await createAccessToken({
            id: userFound._id,
        });

        // Cookies

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: "none",
        });

        // Respuesta

        console.log('Cookies: ', req.cookies);
        console.log('Token: ', token);

        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
        });
       

    }

    catch (err) {
        res.status(500)
    }

}


export const verifyToken = async (req, res) => {
    const { token } = req.cookies;
    if (!token) return res.send(false);

    jwt.verify(token, TOKEN_SECRET, async (error, user) => {
        if (error) return res.sendStatus(401);

        const userFound = await User.findById(user.id);
        if (!userFound) return res.sendStatus(401);

        return res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
        });
    });
};


export const logout = async (req, res) => {
    res.clearCookie("token")
    res.json({ success: true })
    return res.sendStatus(200)
}
