// proyecto.controller.js
import Proyecto from "../models/Proyecto"

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

exports.asignarPieza = async(req,res)=>{
  try {
    const { proyecto } = req.params; // Obtén el ID del proyecto de los parámetros de la URL
    const { piezas } = req.body; // Obtén el array de piezas del cuerpo de la solicitud

    // Verifica si el proyecto existe o realiza las validaciones necesarias
    if(await Proyecto.find({ nombre: proyecto }) == null){
      res.status(200).json({ message: 'No se encontro el proyecto llamado '+ proyecto });
    }

    // Actualiza el proyecto agregando nuevas piezas al campo "piezas" utilizando $addToSet
    const resultado = await Proyecto.updateOne({ nombre: proyecto }, { $addToSet: { piezas: { $each: piezas } } });

    if (resultado.nModified > 0) {
      // Si al menos un documento fue modificado, envía una respuesta exitosa
      res.status(200).json({ message: 'Piezas agregadas al proyecto correctamente' });
    } else {
      // Si no se realizó ninguna modificación, envía un mensaje indicando que el proyecto no se actualizó
      res.status(404).json({ message: 'No se encontró el proyecto o no se realizaron cambios' });
    }
  } catch (error) {
    // Maneja los errores y envía una respuesta de error al cliente
    res.status(500).json({ message: 'Error al agregar piezas al proyecto', error: error.message });
  }
}

// Implementa otros controladores y rutas según sea necesario
export { obtenerProyectosConPiezas, obtenerPiezasDisponibles , asignarPieza};
