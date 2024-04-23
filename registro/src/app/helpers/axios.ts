import axios  from "axios";



/**
 * Funcion para crear un cliente de Axios
 */
const clienteAxios = axios.create({
  baseURL:`http://localhost:4000/app`
});

export {
    clienteAxios,
}