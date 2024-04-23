import express from 'express';
import {
    crearProyecto,
    listarProyectos,
    obtenerProyectoPorId,
    actualizarProyecto,
    eliminarProyecto,
    buscarProyectosPorFiltros,
    asignarPieza
} from "../controllers/proyectoController.js"; // métodos del controlador

const router = express.Router(); // Esto es para poder usar los métodos HTTP (post, put, delete,...)

router.post('/add', crearProyecto); // Ruta para insertar un nuevo proyecto
router.get('/list', listarProyectos); // Ruta para listar proyectos
router.get('/one/:id', obtenerProyectoPorId); // Ruta para obtener un proyecto por su ID
router.put('/edit/:id', actualizarProyecto); // Ruta para editar un proyecto por su ID
router.delete('/delete/:id', eliminarProyecto); // Ruta para borrar un proyecto por su ID
router.delete('/find', buscarProyectosPorFiltros); // Ruta para borrar un proyecto por su ID
router.put('/agregar-pieza/:id',asignarPieza);

// Se exporta el router para poder ser usado en el index (rutas principales)
export default router;