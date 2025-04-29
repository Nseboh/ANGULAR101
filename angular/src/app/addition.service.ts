import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdditionService {

  constructor() { }

  addition(Firstnumber: number, Secondnumber: number): void{
     console.log(Firstnumber + Secondnumber);
  }
}
