const express = require('express')
const cors = require('cors');
const rutasUsuarios= require('./routes/users.route')
require('dotenv').config()
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

// pagina de inicio.
app.get("/", function (req, res) {
    // GET - http://localhost:3000
    res.send("API v1.0");
});
(()=> {
    const rutaBase='/api/v1';
    app.use(rutaBase, rutasUsuarios);
})();


app.listen(PORT, () => console.log(`La applicacion esta corriendo en el puerto ${PORT}!`));