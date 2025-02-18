/**
 * @fileoverview archivo para ejecutar la funcion sumar que realiza los test correspondientes.
 * @author Alvaro Pur
 * @version 1.0
 * @date 2025-02-17
 */


function sumar(a, b) {
    const numA = Number(a);
    if (isNaN(numA)) {
        return NaN;  // Devuelve NaN si 'a' no es un número válido
    }
    return numA + b;
}

module.exports = { sumar }; // En lugar de export
