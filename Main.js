"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Persona_1 = require("./Persona");
var Direccion_1 = require("./Direccion");
var Telefono_1 = require("./Telefono");
var Mail_1 = require("./Mail");
// Crear direcciones
var direccion1 = new Direccion_1.Direccion('Calle Calvario', 1, '28001', 'Madrid', 'Madrid');
var direccion2 = new Direccion_1.Direccion('Calle Molino de Viento', 10, '28013', 'Madrid', 'Madrid', 2, 'C');
var direccion3 = new Direccion_1.Direccion('Calle Goya', 156, '28009', 'Madrid', 'Madrid', 1, 'A');
var direccion4 = new Direccion_1.Direccion('Calle Princesa', 5, '28008', 'Madrid', 'Madrid', 3, 'C');
// Crear telefonos
var telefono1 = new Telefono_1.Telefono('Móvil', '+34 658 947 582');
var telefono2 = new Telefono_1.Telefono('Trabajo', '+34 674 832 147');
var telefono3 = new Telefono_1.Telefono('Móvil', '+34 696 358 321');
// Crear correos electronicos
var mail1 = new Mail_1.Mail('Personal', 'josecu@gmail.com');
var mail2 = new Mail_1.Mail('Personal', 'martafranc@hotmail.com');
var mail3 = new Mail_1.Mail('Personal', 'juanmar@gmail.com');
// Crear personas
var persona1 = new Persona_1.Persona('Jose', 'Cuesta', 29, '18548658A', new Date(1992, 6, 12), 'Rojo', 'Hombre', [direccion1], [mail1], [telefono1], 'Amigo de Marta');
var persona2 = new Persona_1.Persona('Marta', 'Franco', 23, '87854321L', new Date(2003, 9, 21), 'Azul', 'Mujer', [direccion2], [mail2], [telefono2], 'Prima de Laura');
var persona3 = new Persona_1.Persona('Juan', 'Marcos', 27, '45678912C', new Date(1996, 2, 8), 'Verde', 'Hombre', [direccion3], [mail3], [telefono3], 'Novio de Marta');
// Mostramos todas las personas creadas
console.log("Personas creadas:");
console.log(persona1.toString());
console.log(persona2.toString());
console.log(persona3.toString());
// Modificamos el registro de la persona con DNI "23456789B"
var personaModificada = Persona_1.Persona.buscarPorDni("87854321L");
if (personaModificada) {
    personaModificada.agregarDireccion(new Direccion_1.Direccion('Calle Nueva', 2, '50002', 'Alcobendas', 'Madrid'));
    personaModificada.agregarMail(new Mail_1.Mail("personal", "maria.garcia@gmail.com"));
    personaModificada.agregarTelefono(new Telefono_1.Telefono("móvil", "+34 666 345 678"));
    console.log("Persona modificada:");
    console.log(personaModificada.toString());
}
else {
    console.log("No se ha encontrado la persona con DNI '87854321L'");
}
// Mostramos todas las personas de nuevo (incluyendo la persona modificada)
console.log("Personas actualizadas:");
console.log(persona1.toString());
console.log(persona2.toString());
console.log(persona3.toString());
