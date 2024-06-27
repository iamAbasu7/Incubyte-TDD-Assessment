import { StringCalculator } from './StringCalculator';
import * as readline from 'readline';

const calculator = new StringCalculator();

console.log(calculator.add("2"))

console.log(calculator.add("4,7"))

console.log(calculator.add("7\n22,9"))

console.log(calculator.add("//;\n9;2"))

console.log(calculator.add("1,-2,11"))

