export class Proyecto {
    nombre: string;
    descripcion: string;
    fechaInicio: Date;
    fechaFin: Date;
    nombreResponsable: string;
    
    constructor() {
      this.nombre = '';
      this.descripcion = '';
      this.fechaInicio = new Date();
      this.fechaFin = new Date();
      this.nombreResponsable = '';
    }
  }
  