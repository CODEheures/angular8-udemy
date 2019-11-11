import { Component, OnInit } from '@angular/core';

import { Pokemon } from '../models/pokemon';
import { POKEMONS } from '../mocks/pokemons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private title = 'Pokémons';
  private pokemons: Pokemon[];

  ngOnInit(): void {
    this.pokemons = POKEMONS;
  }

  selectPokemon(pokemon: Pokemon): void {
    alert('Ce pokemon se nomme ' + pokemon.name);
  }

}
