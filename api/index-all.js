// Importo servidor. 
const express = require('express');

//! Permite llamar al back desde el FRONT
const cors = require('cors');

// Importo conexión a BBDD.
const { connect } = require('./bd');

// ! Inlcuir el router. 
const routerUser = require('./routers/user.routes');
const routerPregunta = require('./routers/pregunta.routes');

const PORT = 5000;
const app = express();

connect();

//! Permite llamar al back desde el FRONT usando un endpoint diferente. localhost:3000/5000. 
app.use(
  cors({
    origin: "*",    
    //origin: "http://localhost:3001/",
    credentials: true,
  })
);

app.use(express.json());
// es para saber que está funcionando. 
app.get('/api/health', (req, res) => {
  res.json({success: true});
});

app.get('/home', (req, res) => {
  res.status(200).json('Welcome, your app is working well');
})

// ! Inlcuir la ruta base. 
app.use('/users', routerUser);
app.use('/pregunta', routerPregunta);

app.listen(PORT, () => {
  console.log(`Listening http://localhost:${PORT}`);
});
module.exports = app

//

// export default app; 