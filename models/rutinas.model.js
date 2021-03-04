'use strict';
const mongoose = require('mongoose');

const schema_rutina = mongoose.Schema({

    creacion: { type: String, required: true, unique: true },
    vencimiento: { type: Date, required: true, unique: false },
    ejercicios: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ejercicio'
    }]


});

module.exports = mongoose.model('Rutina', schema_rutina, 'rutinas');