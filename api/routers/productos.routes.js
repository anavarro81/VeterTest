const express = require('express');

const router = express.Router();

const {
    getAllProducts
} = require ('../controllers/productos.controller');

console.log('Estoy en productos.rounter');

router.get('/allProducts', getAllProducts);

module.exports = router;


