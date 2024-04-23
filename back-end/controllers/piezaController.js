import Pieza from "../models/piezas.js";

const registrarPieza = async (req, res) => {
  const { nombre, descripcion, marca, tipo } = req.body;

  try {
    // Verificar si ya existe una pieza con el mismo nombre
    const existePieza = await Pieza.findOne({ nombre });
    if (existePieza) {
      return res.status(400).json({ error: 'Ya existe una pieza con este nombre' });
    }

    // Crear una nueva instancia de Pieza
    const nuevaPieza = new Pieza({
      nombre,
      descripcion,
      marca,
      tipo
    });

    // Guardar la nueva pieza en la base de datos
    await nuevaPieza.save();

    res.status(201).json({ message: 'Pieza registrada correctamente', pieza: nuevaPieza });
  } catch (error) {
    console.error('Error al registrar pieza:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const obtenerPiezas = async (req, res) => {
  try {
    // Buscar todas las piezas en la base de datos
    const piezas = await Pieza.find();
    

    res.status(200).json(piezas);
  } catch (error) {
    console.error('Error al obtener piezas:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export { registrarPieza, obtenerPiezas };