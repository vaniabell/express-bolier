const {Schema, model} = require('mongoose');

const UserScheema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    apellido: {
        type: String,
    },
    edad: {
        type: Number,
    },
    email: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
}, {versionKey: false});

module.exports = model('Usuario', UserScheema);