const mongoose = require('mongoose');

const Schema = mongoose.Schema; 


const productoSchema = new Schema(
    
    {   
    name: String,
    description: String,
    quantity: Number
    },      
  
  
  
  { collection: 'productos' }
);




const Producto = mongoose.model('productos', productoSchema);
module.exports = Producto;