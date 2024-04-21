// proyecto.controller.js
const Proyecto = require('../models/proyecto.model');

exports.obtenerProyectosConPiezas = async (req, res) => {
  try {
    const proyectos = await Proyecto.find().populate('piezas');
    res.status(200).json(proyectos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener proyectos con piezas', error });
  }
};

exports.obtenerPiezasDisponibles = async (req, res) => {
  try {
    const piezas = await Pieza.find({ proyecto: null });
    res.status(200).json(piezas);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener piezas disponibles', error });
  }
};

// Implementa otros controladores y rutas según sea necesario
export { obtenerProyectosConPiezas, obtenerPiezasDisponibles };
