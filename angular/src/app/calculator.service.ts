import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  AdditionOfNumbers(num1: number, num2: number){
    return num1 + num2;

  }
  MultiplicationOfNumbers(num1: number, num2: number){
    return num1 * num2;
    
  }
  SubtrctionOfNumbers(num1: number, num2: number){
    return num1-num2;
  }
  DivisionOfNumbers(num1: number, num2: number){
    return num1/num2;
  }


}
