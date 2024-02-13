import Ventas from '../models/ventas.model.js'

export const getVentas = async (req, res) => {
    const ventas = await Ventas.find({
        user: req.user._id
    });
    res.json(ventas);
}

export const getVenta = async (req, res) => {
    const ventas = await Ventas.findById(req.params.id);
    if (!ventas) return res.status(404).json({ message: "Venta en colonia no encontrada" });
    res.json(ventas);
}

export const createVentas = async (req, res) => {
    const { ...body } = req.body
    const venta = new Ventas({ body });
    const savedVentas = await venta.save();
    res.json(savedVentas);
}

export const updateVentas = async (req, res) => {
    const venta = await Ventas.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    if (!venta) return res.status(404).json({ message: "Venta en colonia no encontrada" });
    res.json(venta);
}

export const deleteVentas = async (req, res) => {
    const venta = await Ventas.findByIdAndDelete(req.params.id);
    if (!venta) return res.status(404).json({ message: "Venta en colonia no encontrada" });
    return res.sendStatus(204)
}