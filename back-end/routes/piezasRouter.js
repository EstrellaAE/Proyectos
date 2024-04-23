import  express from "express";
import {obtenerPiezas, registrarPieza} from "../controllers/piezaController.js"

const router = express.Router();


//registro de proyecto 
router.post('/add',registrarPieza);
router.get('/obtener',obtenerPiezas)


export default router;
