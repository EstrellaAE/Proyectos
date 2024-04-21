// proyecto.routes.js
const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/proyecto.controller');

router.get('/proyectos-con-piezas', proyectoController.obtenerProyectosConPiezas);
router.get('/piezas-disponibles', proyectoController.obtenerPiezasDisponibles);
// Implementa otras rutas de acuerdo a los requisitos

module.exports = router;
