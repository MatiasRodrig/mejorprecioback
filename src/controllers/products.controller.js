import Product from "../models/products.model.js";

export const getProducts = async (req, res) => {
    const products = await Product.find({
        user: req.user._id
    });
    res.json(products);
}

export const createProducts = async (req, res) => {
    const { ...body } = req.body
    const product = new Product({ body });
    const savedProduct = await product.save();
    res.json(savedProduct);
};
    

export const getProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Producto no encontrado" });
    res.json(product);
}

export const updateProduct = async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    if (!product) return res.status(404).json({ message: "Producto no encontrado" });
    res.json(product);
};


export const deleteProduct = async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: "Producto no encontrado" });
    return res.sendStatus(204)
}
