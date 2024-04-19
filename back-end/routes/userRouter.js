import  express from "express";
import {registrarPieza} from "../controllers/piezaController.js"
import {agregarProyecto} from "../controllers/proyectoController.js"
const router = express.Router();

//registro de piezas 
router.post('/pieza',registrarPieza);
//registro de proyecto 
router.post('/proyecto',agregarProyecto);


export default router;
