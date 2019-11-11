import { Injectable} from '@angular/core';
import {POKEMONS} from '../mocks/pokemons';
import {Pokemon} from '../models/pokemon';

@Injectable()
export class PokemonsService {

  getPokemons(): Pokemon[] {
    return POKEMONS;
  }

  getPokemon(id: number): Pokemon {
    return this.getPokemons().filter((item) => {
      return item.id === id;
    })[0];
  }

}
