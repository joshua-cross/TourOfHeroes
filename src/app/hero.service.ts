import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';


@Injectable()
export class HeroService {

  //method that returns the list of heroes from mock-herores.
  getHeroes(): Hero[] {
    return HEROES;
  }

  constructor() { }

}
