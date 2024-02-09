import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import Jwt from 'jsonwebtoken'
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
            id: userSaved._id,
          });

        // Cookies

        res.cookie("token", token);

        // Respuesta

        res.json({
            id: savedUser._id,
            username: savedUser.username,
            email: savedUser.email,
            createdAt: savedUser.createdAt,
            updatedAt: savedUser.updatedAt
        });;
    }

    catch (err) {
        res.status(500)
    }

}

export const login = (req, res) => {

}