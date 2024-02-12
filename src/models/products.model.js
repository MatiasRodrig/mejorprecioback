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
    comentario: {
        type: String
    },
    fecha_creacion: { type: Date, expires: 86400, default: Date.now },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;