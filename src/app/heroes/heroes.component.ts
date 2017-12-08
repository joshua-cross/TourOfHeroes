import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
//importing the mock heroes so they can be displayed as a list.
import { HEROES } from '../mock-heroes'


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //creating a hero from the Hero classes properties.
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }

  heroes = HEROES;
  
  constructor() { }

  ngOnInit() {
  }

}
