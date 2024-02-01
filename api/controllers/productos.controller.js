const Producto = require('../models/producto.model')

const getAllProducts = async (req, res) => {
    
    console.log('Estoy en getAllProducts');
    
    try {
      const allProducts = await Producto.find()
      console.log('allProducts ', allProducts);
      return res.status(200).json(allProducts);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  module.exports = {getAllProducts};