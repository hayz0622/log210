// src/fizzbuzz.test.ts
import { fizzBuzz } from './fizzbuzz';

describe('FizzBuzz', () => {
  test('retourne "1" pour 1', () => {
    expect(fizzBuzz(1)).toBe('1');
  });

  test('retourne "2" pour 2', () => {
    expect(fizzBuzz(2)).toBe('2');
  });

  test('retourne "Fizz" pour 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });

  test('retourne "Buzz" pour 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });

  test('retourne "FizzBuzz" pour 15', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });

  test('retourne "Fizz" pour 6 (autre multiple de 3)', () => {
    expect(fizzBuzz(6)).toBe('Fizz');
  });

  test('retourne "Buzz" pour 10 (autre multiple de 5)', () => {
    expect(fizzBuzz(10)).toBe('Buzz');
  });

  test('retourne "FizzBuzz" pour 30 (autre multiple de 15)', () => {
    expect(fizzBuzz(30)).toBe('FizzBuzz');
  });

  // Tests pour les exigences évolutives
  describe('Exigences évolutives - nombres contenant des chiffres', () => {
    test('retourne "Fizz" pour 13 (contient 3)', () => {
      expect(fizzBuzz(13)).toBe('Fizz');
    });

    test('retourne "Fizz" pour 23 (contient 3)', () => {
      expect(fizzBuzz(23)).toBe('Fizz');
    });

    test('retourne "Fizz" pour 31 (contient 3)', () => {
      expect(fizzBuzz(31)).toBe('Fizz');
    });

    test('retourne "Buzz" pour 52 (contient 5)', () => {
      expect(fizzBuzz(52)).toBe('Buzz');
    });

    test('retourne "Buzz" pour 59 (contient 5)', () => {
      expect(fizzBuzz(59)).toBe('Buzz');
    });

    test('retourne "FizzBuzz" pour 35 (contient 3 et 5)', () => {
      expect(fizzBuzz(35)).toBe('FizzBuzz');
    });

    test('retourne "FizzBuzz" pour 53 (contient 5 et 3)', () => {
      expect(fizzBuzz(53)).toBe('FizzBuzz');
    });
  });
}); 