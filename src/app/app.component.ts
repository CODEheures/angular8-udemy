import { Component, OnInit } from '@angular/core';

import { Pokemon } from '../types/pokemon';
import { POKEMONS } from '../mocks/pokemons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pokemon-app';
  private pokemons: Pokemon[];

  ngOnInit(): void {
    this.pokemons = POKEMONS;
  }

  selectPokemon(pokemon: Pokemon): void {
    alert('Ce pokemon se nomme ' + pokemon.name);
  }
}
