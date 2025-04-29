import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// interface to contain what the forms will be taking from the user
interface userForm{
  name:String,
  email:string,
  password:String,
  confirmPassword:string,
  number:string,
  age:number;
  maleOrFemale:String,
  DateOfBirth:Date,
  reasonForRegistering:String,
}

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  //assigning the interface data type created to the variable(userRegistrationForm)
  userRegistrationForm: userForm={// fill with necessary infornamtion. the information should be the same a element in the interface
    name :"",
    email:"",
    password:"",
    confirmPassword:"",
    number:"",
    age:0,
    maleOrFemale:"",
    DateOfBirth:new Date(),
    reasonForRegistering:""
  }

  submitFormInfor(){

    //assume that this method will send the user input to a particular endpoint

    console.log( "This is what the user typed",this.userRegistrationForm)
  }
}
