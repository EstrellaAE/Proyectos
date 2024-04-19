import  express from "express";
import {agregarProyecto} from "../controllers/proyectoController.js"

const router = express.Router();


//registro de proyecto 
router.post('/add',agregarProyecto);


export default router;
