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

  //creating cariable of type selectedHero.
  selectedHero: Hero;

  //creating an onclick event which will be called when a hero list has been selected.
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(this.selectedHero.name);
  }

  constructor() { }

  ngOnInit() {
  }

}
