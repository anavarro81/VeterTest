const express = require("express"); 
const routerProduct = require ('./api/routers/productos.routes')
const app = express(); 

const { connect } = require ('./bd')
app.use('/productos', routerProduct)

connect();

app.use(express.json());


app.get("/", (req, res) => {
     res.send("Express on Vercel"); 
}); 




const PORT = process.env.PORT || 5000; 

app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });

module.exports = app;