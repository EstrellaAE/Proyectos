import  express from "express";
import {registrarPieza} from "../controllers/piezaController.js"

const router = express.Router();


//registro de proyecto 
router.post('/add',registrarPieza);


export default router;
