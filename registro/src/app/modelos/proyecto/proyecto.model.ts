export class Proyecto {
    nombre: string;
    descripcion: string;
    responsable: string;
    fechaInicio: Date;
    fechaFin: Date;
  
    constructor() {
      this.nombre = '';
      this.descripcion = '';
      this.responsable = '';
      this.fechaInicio = new Date();
      this.fechaFin = new Date();
    }
  }
  