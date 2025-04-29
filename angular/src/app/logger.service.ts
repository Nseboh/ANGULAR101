import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //this means the service can be assessed by the entire application
})
export class LoggerService {

  constructor() { }
  logOutThisMessage(message: string){
    console.log('This is loggerservice working and your message is',message);
  }
  alertPopUp(message: string){
    alert('This is loggerservice working and your message is');
  }

  
}
