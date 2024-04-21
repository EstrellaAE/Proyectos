import Proyecto from '../models/proyectos.js';

const agregarProyecto = async (req, res) => {
  try {
    // Obtener los datos del cuerpo de la solicitud (req.body)
    const { nombre, descripcion, fechaInicio, fechaFin, nombreResponsable } = req.body;
    
    // Crear una nueva instancia de Proyecto con los datos proporcionados
    const nuevoProyecto = new Proyecto({
      nombre,
      descripcion,
      fechaInicio,
      fechaFin,
      nombreResponsable
    });

    // Guardar el nuevo proyecto en la base de datos
    const proyectoGuardado = await nuevoProyecto.save();

    // Respondemos con un código 201 (Created) y el proyecto guardado
    res.status(201).json({ message: 'Proyecto agregado correctamente', proyecto: proyectoGuardado });
  } catch (error) {
    console.error('Error al agregar proyecto:', error.message);
    // Respondemos con un código 500 (Internal Server Error) y un mensaje de error
    res.status(500).json({ error: 'Error interno del servidor al agregar proyecto' });
  }
};

const listarProyectos = async (req, res) => {
  try {
    // Obtener todos los proyectos de la base de datos
    const proyectos = await Proyecto.find();

    // Respondemos con un código 200 (OK) y la lista de proyectos
    res.status(200).json(proyectos);
  } catch (error) {
    console.error('Error al listar proyectos:', error.message);
    // Respondemos con un código 500 (Internal Server Error) y un mensaje de error
    res.status(500).json({ error: 'Error interno del servidor al listar proyectos' });
  }
};

// Exportar las funciones como un objeto para ser importadas en otros archivos
export { agregarProyecto, listarProyectos };
