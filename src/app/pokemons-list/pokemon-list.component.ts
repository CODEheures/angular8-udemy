import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { Pokemon } from '../../models/pokemon';
import { POKEMONS } from '../../mocks/pokemons';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  private title = 'Pokémons';
  private pokemons: Pokemon[];

  constructor(private router: Router){}

  ngOnInit(): void {
    this.pokemons = POKEMONS;
  }

  selectPokemon(pokemon: Pokemon): void {
    const link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }

}
