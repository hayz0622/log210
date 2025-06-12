// src/fizzbuzz.ts

/**
 * Évalue si un nombre doit retourner "Fizz", "Buzz", "FizzBuzz" ou le nombre lui-même
 * selon les règles évoluées du FizzBuzz.
 * 
 * Règles:
 * - FizzBuzz: multiple de 3 ET 5, OU contient les chiffres 3 ET 5
 * - Fizz: multiple de 3, OU contient le chiffre 3
 * - Buzz: multiple de 5, OU contient le chiffre 5
 * - Sinon: retourne le nombre en string
 */
export function fizzBuzz(n: number): string {
  const numberAsString = n.toString();
  
  const isFizzCondition = isMultipleOf(n, 3) || containsDigit(numberAsString, '3');
  const isBuzzCondition = isMultipleOf(n, 5) || containsDigit(numberAsString, '5');

  if (isFizzCondition && isBuzzCondition) {
    return 'FizzBuzz';
  }
  
  if (isFizzCondition) {
    return 'Fizz';
  }
  
  if (isBuzzCondition) {
    return 'Buzz';
  }
  
  return numberAsString;
}

/**
 * Vérifie si un nombre est multiple d'un autre
 */
function isMultipleOf(number: number, divisor: number): boolean {
  return number % divisor === 0;
}

/**
 * Vérifie si une chaîne contient un chiffre spécifique
 */
function containsDigit(str: string, digit: string): boolean {
  return str.includes(digit);
} 