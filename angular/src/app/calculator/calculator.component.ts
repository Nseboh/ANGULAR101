import { AdditionService } from '../addition.service';
import { CalculatorService } from '../calculator.service';
import { LoggerService } from './../logger.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
constructor(private calculator: CalculatorService ){}

result!: number;
getWhatIsClicked(value:number|string){
  // find the display div
  const display = document.getElementById("disp");

  // if the display exists, find the inner html and append the value t it
 if(display){
  display.innerHTML = display.innerHTML+value.toString();
 }

 // LOGIC
 // we assume that by the time the user clicks on the equal button,the display will have both the LHS and RHS of an operand, and we will split the string by that operand them to two variables
 if (value =="="){
  // take whatever is inside the display and assign it to a vlaue
  let values= display?.innerHTML;

  //separate the values into first num and second num
  // in doing that we will create an array that will store the split
  let arrayForadd = values?.split("+");
  let arrayForsub = values?.split("-");
  let arrayForMult = values?.split("*");
  let arrayForOver = values?.split("/");

  if(arrayForadd){
    // if the plus sign is thre operand use, the split will cause the array to contain more that one item. thus we can leverage that and check for the array that has more than one item
    if(arrayForadd.length >1){
      let fnum = arrayForadd[0];
      let snum = arrayForadd[1].replace("=", "");

      this.result = this.calculator.AdditionOfNumbers(parseInt(fnum), parseInt(snum));
      console.log(this.result);
    }
  }
  if (arrayForsub){
    if(arrayForsub.length >1){
      let fnum = arrayForsub[0];
      let snum = arrayForsub[1].replace("=", "");
      this.result = this.calculator.SubtrctionOfNumbers(parseInt(fnum), parseInt(snum));
      console.log(this.result);
    }
  }
  if (arrayForMult){
    if(arrayForMult.length >1){
      let fnum = arrayForMult[0];
      let snum = arrayForMult[1].replace("=", "");

      this.result=this.calculator.MultiplicationOfNumbers(parseInt(fnum), parseInt(snum));
      console.log(this.result);
    }
  }
  if (arrayForOver){
    if(arrayForOver.length >1){
      let fnum = arrayForOver[0];
      let snum = arrayForOver[1].replace("=", "");
      this.result = this.calculator.DivisionOfNumbers(parseInt(fnum), parseInt(snum));
      console.log(this.result);
    }
  }

  console.log('array for addtion is' , arrayForadd)
  console.log('array for subtraction is' , arrayForsub)
  console.log('array for multiplication is' , arrayForMult)
  console.log('array for division is' , arrayForOver)


 }

}

}
