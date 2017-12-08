import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  //creating an array that stores the message.
  messages: string[] = []


  constructor() { }

  //adding a string to the messages array.
  add(message: string) {
    //adding the string message to the messages array.
    this.messages.push(message)
  }

  //method that clears the messages array.
  clear() {
    this.messages = [];
  }
}
