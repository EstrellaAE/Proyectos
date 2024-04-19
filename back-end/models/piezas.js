import mongoose from "mongoose";

const piezaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  marca: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    required: true,
  },
});

const Pieza = mongoose.model('Pieza', piezaSchema);

export default Pieza;
