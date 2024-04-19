import mongoose from "mongoose";

const proyectoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  piezas: [
    {
      nombrePieza: {
        type: String,
        required: true,
      },
      cantidadSolicitada: {
        type: Number,
        required: true,
      },
    },
  ],
  area: {
    type: String,
    required: true,
  },
  fechaInicio: {
    type: Date,
    required: true,
  },
  fechaFin: {
    type: Date,
    required: true,
  },
  nombreResponsable: {
    type: String,
    required: true,
  },
});

const Proyecto = mongoose.model('Proyecto', proyectoSchema);

export default  Proyecto;
