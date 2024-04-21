// proyecto.model.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const proyectoSchema = new Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  responsable: { type: String, required: true },
  fechaInicio: { type: Date, required: true },
  fechaFin: { type: Date }
  // Otros campos y relaciones con Pieza u otros modelos
});

module.exports = mongoose.model('Proyecto', proyectoSchema);
