import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

//importing of and observable to make getHeroes asynchronous
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of'

import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  //method that returns the list of heroes from mock-herores.
  getHeroes(): Observable<Hero[]> {
    //adding a message to the messages array.
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  //this is something called "service-in-service" where MessageService is in the
  //Hero service which is injected in the hero component.
  constructor(private messageService: MessageService) { }

}
