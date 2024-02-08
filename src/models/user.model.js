import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    nombre: {
        type: String, 
        required: true, 
        trim: true
    },
    apellido: {
        type: String,
        required: true, 
        trim: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: [true, 'El correo es requerido']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es requerida'],
    },
    telefono: {
        type: Number
    }
}, 
{
    timestamps: true
})


export default mongoose.model('User', userSchema)