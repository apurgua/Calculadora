/**
 * @fileoverview archivo que realiza los diferentes test unitarios, aborda varios escenarios de pruebas, en este punto el mismo codigo recibe diferetens tipos de datos para ver su correcto funcionamiento.
 * @author Alvaro Pur
 * @version 1.0
 * @date 2025-02-17
 */


import { sumar } from './Calculadora.js';

describe('Pruebas de la función sumar', () => {

    test('Suma de 2 + 3 debe ser 5', () => {
        expect(sumar(2, 3)).toBe(5);
    });

    test('Suma de -1 + 1 debe ser 0', () => {
        expect(sumar(-1, 1)).toBe(0);
    });

    test('Suma de -2 + -3 debe ser -5', () => {
        expect(sumar(-2, -3)).toBe(-5);
    });

    test('Suma de 0 + 5 debe ser 5', () => {
        expect(sumar(0, 5)).toBe(5);
    });

    test('Suma de 0 + -5 debe ser -5', () => {
        expect(sumar(0, -5)).toBe(-5);
    });

    test('Suma de 1000000 + 2000000 debe ser 3000000', () => {
        expect(sumar(1000000, 2000000)).toBe(3000000);
    });

    test('Suma de 1.5 + 2.5 debe ser 4', () => {
        expect(sumar(1.5, 2.5)).toBe(4);
    });

    test('Suma de 0.0001 + 0.0002 debe ser aproximadamente 0.0003', () => {
        expect(sumar(0.0001, 0.0002)).toBeCloseTo(0.0003);
    });

    test('Suma de "2" + 3 debe ser 5', () => {
        expect(sumar("2", 3)).toBe(5);
    });

    test('Suma de "a" + 3 debe ser NaN', () => {
        expect(sumar("a", 3)).toBeNaN();
    });

});
