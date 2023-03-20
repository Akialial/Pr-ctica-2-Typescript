class Direccion {
    calle: string;
    numero: number;
    piso?: number;
    letra?: string;
    codigoPostal: string;
    poblacion: string;
    provincia: string;
  
    constructor(calle: string, numero: number, codigoPostal: string, poblacion: string, provincia: string, piso?: number, letra?: string) {
      this.calle = calle;
      this.numero = numero;
      this.piso = piso;
      this.letra = letra;
      this.codigoPostal = codigoPostal;
      this.poblacion = poblacion;
      this.provincia = provincia;
    }
  }
  
  export { Direccion };
  