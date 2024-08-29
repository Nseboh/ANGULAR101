import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

//declearing an interface for the object
interface PersonStructure{
  name: string;
  age: number;
  lvl: number;
  isSerious: boolean;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})



export class CardComponent {
@Input() channelName ="Angular";
@Input() channelContent ="This is a channel";
@Input() imageString = ""

number1!: number;
number2!: number;
result!: number;

// creatng an array
arrayOfNumber:String[]=["1","2","3","4","5","6","7","8","9"];
arrayofNumbers:Array<number>=[1,2 ,3,];

//creating an object
person: PersonStructure ={
  name:"Sampson",
  age: 12,
  lvl: 300,
  isSerious: true

}

// NameOsSrudent:String="James";
// aggOfStudent: Number = 25;
// isStudentSerious: Boolean = true;

addTwoNumbers(number1:Number, number2:Number){
  this.result = this.number1 + this.number2;
}

}
let anotherName="Stephen"
const ageOfTheNewStudent : number = 24;
let isStudentSerious: Boolean = false;