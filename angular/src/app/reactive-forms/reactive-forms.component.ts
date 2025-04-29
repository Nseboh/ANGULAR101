import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {
    userForm = new FormGroup({
      firstName: new FormControl(""),
      lastName: new FormControl(""),
      age: new FormControl(""),
      email: new FormControl(""),
      password: new FormControl(""),
      confirmPassword: new FormControl(""),
      number: new FormControl(""),
      reasonForRegistering: new FormControl(""),
      dateOfBirth: new FormControl(""),

    })
    number  = new FormControl("");

    updateNumber(){

      console.log(this.userForm.value);
    }
}
