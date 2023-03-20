import { Direccion } from "./Direccion";
import { Telefono } from "./Telefono";
import { Mail } from "./Mail";

export class Persona {
  private static registro: Persona[] = [];

  constructor(
    public nombre: string,
    public apellidos: string,
    public edad: number,
    public dni: string,
    public cumpleanos: Date,
    public colorFavorito: string,
    public sexo: string,
    public direcciones: Direccion[],
    public mails: Mail[],
    public telefonos: Telefono[],
    public notas: string
  ) {
    Persona.registro.push(this);
  }

  public static buscarPorDni(dni: string): Persona | undefined {
    return this.registro.find((persona: { dni: string; }) => persona.dni === dni);
  }

  public agregarDireccion(direccion: Direccion): void {
    this.direcciones.push(direccion);
  }

  public agregarMail(mail: Mail): void {
    this.mails.push(mail);
  }

  public agregarTelefono(telefono: Telefono): void {
    this.telefonos.push(telefono);
  }

  public toString(): string {
    const fecha = this.cumpleanos.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    let textoDirecciones = "";
    for (const direccion of this.direcciones) {
      textoDirecciones += `\n- ${direccion.toString()}`;
    }

    let textoMails = "";
    for (const mail of this.mails) {
      textoMails += `\n- ${mail.toString()}`;
    }

    let textoTelefonos = "";
    for (const telefono of this.telefonos) {
      textoTelefonos += `\n- ${telefono.toString()}`;
    }

    return `Nombre: ${this.nombre} ${this.apellidos}
Edad: ${this.edad}
DNI: ${this.dni}
Fecha de nacimiento: ${fecha}
Color favorito: ${this.colorFavorito}
Sexo: ${this.sexo}
Direcciones:${textoDirecciones}
Mails:${textoMails}
Teléfonos:${textoTelefonos}
Notas: ${this.notas}`;
  }
}
