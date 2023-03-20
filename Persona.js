"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = exports.Persona = /** @class */ (function () {
    function Persona(nombre, apellidos, edad, dni, cumpleanos, colorFavorito, sexo, direcciones, mails, telefonos, notas) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.dni = dni;
        this.cumpleanos = cumpleanos;
        this.colorFavorito = colorFavorito;
        this.sexo = sexo;
        this.direcciones = direcciones;
        this.mails = mails;
        this.telefonos = telefonos;
        this.notas = notas;
        Persona.registro.push(this);
    }
    Persona.buscarPorDni = function (dni) {
        return this.registro.find(function (persona) { return persona.dni === dni; });
    };
    Persona.prototype.agregarDireccion = function (direccion) {
        this.direcciones.push(direccion);
    };
    Persona.prototype.agregarMail = function (mail) {
        this.mails.push(mail);
    };
    Persona.prototype.agregarTelefono = function (telefono) {
        this.telefonos.push(telefono);
    };
    Persona.prototype.toString = function () {
        var fecha = this.cumpleanos.toLocaleDateString("es-ES", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
        var textoDirecciones = "";
        for (var _i = 0, _a = this.direcciones; _i < _a.length; _i++) {
            var direccion = _a[_i];
            textoDirecciones += "\n- ".concat(direccion.toString());
        }
        var textoMails = "";
        for (var _b = 0, _c = this.mails; _b < _c.length; _b++) {
            var mail = _c[_b];
            textoMails += "\n- ".concat(mail.toString());
        }
        var textoTelefonos = "";
        for (var _d = 0, _e = this.telefonos; _d < _e.length; _d++) {
            var telefono = _e[_d];
            textoTelefonos += "\n- ".concat(telefono.toString());
        }
        return "Nombre: ".concat(this.nombre, " ").concat(this.apellidos, "\nEdad: ").concat(this.edad, "\nDNI: ").concat(this.dni, "\nFecha de nacimiento: ").concat(fecha, "\nColor favorito: ").concat(this.colorFavorito, "\nSexo: ").concat(this.sexo, "\nDirecciones:").concat(textoDirecciones, "\nMails:").concat(textoMails, "\nTel\u00E9fonos:").concat(textoTelefonos, "\nNotas: ").concat(this.notas);
    };
    Persona.registro = [];
    return Persona;
}());
