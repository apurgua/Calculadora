// Calculadora.test.js
/**
 * @fileoverview archivo que realiza los diferentes test unitarios, aborda varios escenarios de pruebas, en este punto el mismo codigo recibe diferentes tipos de datos para ver su correcto funcionamiento.
 * @author Alvaro Pur
 * @version 1.0
 * @date 2025-02-17
 */

import { sumar } from './Calculadora.js';  // Usando import en lugar de require

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

    // Nuevas pruebas
    test('Suma de undefined + 3 debe ser 3', () => {
        expect(sumar(undefined, 3)).toBe(3);
    });

    test('Suma de null + 5 debe ser 5', () => {
        expect(sumar(null, 5)).toBe(5);
    });

    test('Suma de null + undefined debe ser 0', () => {
        expect(sumar(null, undefined)).toBe(0);
    });

    test('Suma de undefined + null debe ser 0', () => {
        expect(sumar(undefined, null)).toBe(0);
    });

    test('Suma de undefined + undefined debe ser NaN', () => {
        expect(sumar(undefined, undefined)).toBeNaN();
    });

    test('Suma de 5 + NaN debe ser NaN', () => {
        expect(sumar(5, NaN)).toBeNaN();
    });

    test('Suma de "10" + "20" debe ser 30', () => {
        expect(sumar("10", "20")).toBe(30);
    });

    test('Suma de un objeto y un número debe ser NaN', () => {
        expect(sumar({}, 10)).toBeNaN();
    });
});
