import mongoose from "mongoose"

const ventasSchema = mongoose.Schema({
    product: {
        type: String,
        required: true
    },
    precio: {
        type: String,
        required: true
    },
    fecha_creacion: { type: Date, expires: 86400, default: Date.now },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    description: {
        type: String
    
    },
    ubicacion: {
        type: String,
        required: true
    }
}
)



export default mongoose.model('Ventas', ventasSchema)