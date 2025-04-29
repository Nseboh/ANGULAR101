import { AdditionService } from './../addition.service';
import { LoggerService } from './../logger.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

  // test:string ="";
  //ngif approach
  shown:boolean = false;
  nameEntered:string ="";

  constructor(private Loggerservice: LoggerService, private Additionservice: AdditionService){
    this.Loggerservice.logOutThisMessage("Hello i called this service component");

    this.Loggerservice.alertPopUp("Hello i called this service component");
    this.Additionservice.addition(3,4);
  }




  setTheTexttoShow(){
    this.shown= true;

  }

  dontShowText(){
    this.shown= false;
  }
  // ShowTest(Test:string="Hello There"){
  //   this.test = "Hello There";

  // }
}
