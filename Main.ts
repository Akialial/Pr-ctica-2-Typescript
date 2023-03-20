import { Persona } from "./Persona";
import { Direccion } from "./Direccion";
import { Telefono } from "./Telefono";
import { Mail } from "./Mail";

// Crear direcciones
const direccion1 = new Direccion('Calle Calvario', 1, '28001', 'Madrid', 'Madrid');
const direccion2 = new Direccion('Calle Molino de Viento', 10, '28013', 'Madrid', 'Madrid', 2, 'C');
const direccion3 = new Direccion('Calle Goya', 156, '28009', 'Madrid', 'Madrid', 1, 'A');
const direccion4 = new Direccion('Calle Princesa', 5, '28008', 'Madrid', 'Madrid', 3, 'C');

// Crear telefonos
const telefono1 = new Telefono('Móvil', '+34 658 947 582');
const telefono2 = new Telefono('Trabajo', '+34 674 832 147');
const telefono3 = new Telefono('Móvil', '+34 696 358 321')

// Crear correos electronicos
const mail1 = new Mail('Personal', 'josecu@gmail.com');
const mail2 = new Mail('Personal', 'martafranc@hotmail.com');
const mail3 = new Mail('Personal', 'juanmar@gmail.com')

// Crear personas
const persona1 = new Persona('Jose', 'Cuesta', 29, '18548658A', new Date(1992, 6, 12), 'Rojo', 'Hombre', [direccion1], [mail1], [telefono1], 'Amigo de Marta');
const persona2 = new Persona('Marta', 'Franco', 23, '87854321L', new Date(2003, 9, 21), 'Azul', 'Mujer', [direccion2], [mail2], [telefono2], 'Prima de Laura');
const persona3 = new Persona('Juan', 'Marcos', 27, '45678912C', new Date(1996, 2, 8), 'Verde', 'Hombre', [direccion3], [mail3], [telefono3], 'Novio de Marta');

// Mostramos todas las personas creadas
console.log("Personas creadas:");
console.log(persona1.toString());
console.log(persona2.toString());
console.log(persona3.toString());

// Modificamos el registro de la persona con DNI "23456789B"
const personaModificada = Persona.buscarPorDni("87854321L");
if (personaModificada) {
    personaModificada.agregarDireccion(new Direccion('Calle Nueva', 2, '50002', 'Alcobendas', 'Madrid'));
    personaModificada.agregarMail(new Mail("personal", "maria.garcia@gmail.com"));
    personaModificada.agregarTelefono(new Telefono("móvil", "+34 666 345 678"));
    console.log("Persona modificada:");
    console.log(personaModificada.toString());
} else {
    console.log("No se ha encontrado la persona con DNI '87854321L'");
}

// Mostramos todas las personas de nuevo (incluyendo la persona modificada)
console.log("Personas actualizadas:");
console.log(persona1.toString());
console.log(persona2.toString());
console.log(persona3.toString());