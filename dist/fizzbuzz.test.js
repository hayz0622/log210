"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/fizzbuzz.test.ts
const fizzbuzz_1 = require("./fizzbuzz");
describe('FizzBuzz', () => {
    test('retourne "1" pour 1', () => {
        expect(fizzbuzz_1.fizzBuzz(1)).toBe('1');
    });
    test('retourne "2" pour 2', () => {
        expect(fizzbuzz_1.fizzBuzz(2)).toBe('2');
    });
    test('retourne "Fizz" pour 3', () => {
        expect(fizzbuzz_1.fizzBuzz(3)).toBe('Fizz');
    });
    test('retourne "Buzz" pour 5', () => {
        expect(fizzbuzz_1.fizzBuzz(5)).toBe('Buzz');
    });
    test('retourne "FizzBuzz" pour 15', () => {
        expect(fizzbuzz_1.fizzBuzz(15)).toBe('FizzBuzz');
    });
    test('retourne "Fizz" pour 6 (autre multiple de 3)', () => {
        expect(fizzbuzz_1.fizzBuzz(6)).toBe('Fizz');
    });
    test('retourne "Buzz" pour 10 (autre multiple de 5)', () => {
        expect(fizzbuzz_1.fizzBuzz(10)).toBe('Buzz');
    });
    test('retourne "FizzBuzz" pour 30 (autre multiple de 15)', () => {
        expect(fizzbuzz_1.fizzBuzz(30)).toBe('FizzBuzz');
    });
    // Tests pour les exigences évolutives
    describe('Exigences évolutives - nombres contenant des chiffres', () => {
        test('retourne "Fizz" pour 13 (contient 3)', () => {
            expect(fizzbuzz_1.fizzBuzz(13)).toBe('Fizz');
        });
        test('retourne "Fizz" pour 23 (contient 3)', () => {
            expect(fizzbuzz_1.fizzBuzz(23)).toBe('Fizz');
        });
        test('retourne "Fizz" pour 31 (contient 3)', () => {
            expect(fizzbuzz_1.fizzBuzz(31)).toBe('Fizz');
        });
        test('retourne "Buzz" pour 52 (contient 5)', () => {
            expect(fizzbuzz_1.fizzBuzz(52)).toBe('Buzz');
        });
        test('retourne "Buzz" pour 59 (contient 5)', () => {
            expect(fizzbuzz_1.fizzBuzz(59)).toBe('Buzz');
        });
        test('retourne "FizzBuzz" pour 35 (contient 3 et 5)', () => {
            expect(fizzbuzz_1.fizzBuzz(35)).toBe('FizzBuzz');
        });
        test('retourne "FizzBuzz" pour 53 (contient 5 et 3)', () => {
            expect(fizzbuzz_1.fizzBuzz(53)).toBe('FizzBuzz');
        });
    });
});
//# sourceMappingURL=fizzbuzz.test.js.map