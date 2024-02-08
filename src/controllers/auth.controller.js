import User from '../models/user.model.js'


export const register = async (req, res, next) => {
    const { nombre, apellido, email, password } = req.body

    try {
        const newUser = new User(
            {
                nombre,
                apellido,
                email,
                password
            }
        )

        const savedUser = await newUser.save()
        res.json(savedUser);
    }

    catch (err) {
        console.log(err)
    }

}

export const login = (req, res, next) => {

}