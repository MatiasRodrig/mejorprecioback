import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    mercado: {
        type: String,
        require: true
    },
    fecha_creacion: { type: Date, expires: 86400, default: Date.now },
    description: {
        type: String,
        required: true
    },
    ubicacion: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
})


export default mongoose.model('Product', productSchema);