import  express from "express";
import {agregarProyecto,listarProyectos,} from "../controllers/proyectoController.js"

const router = express.Router();


//registro de proyecto 
router.post('/add',agregarProyecto);
router.get('/list',listarProyectos);


export default router;
