import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

//importing of and observable to make getHeroes asynchronous
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of'

@Injectable()
export class HeroService {

  //method that returns the list of heroes from mock-herores.
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

  constructor() { }

}
