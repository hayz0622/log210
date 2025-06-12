#!/usr/bin/env node
// src/cli.ts
import { fizzBuzz } from './fizzbuzz';

for (let i = 1; i <= 100; i++) {
  console.log(fizzBuzz(i));
} 