import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { catchError, tap  } from 'rxjs/operators';
import {Pokemon} from '../models/pokemon';

@Injectable()
export class PokemonsService {

  private pokemonsUrl = 'api/pokemons';

  constructor(private http: HttpClient) {
  }

  private static log(message: string): void {
    console.log(message);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.error(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokemonsUrl).pipe(
      tap(_ => PokemonsService.log('fetched pokemons')),
      catchError(this.handleError('getPokemons', []))
    );
  }

  getPokemon(id: number): Observable<Pokemon> {
    const url = `${this.pokemonsUrl}/${id}`;

    return this.http.get<Pokemon>(url).pipe(
      tap(_ => PokemonsService.log(`fetched pokemon ${id}`)),
      catchError(this.handleError<Pokemon>(`getPokemon id=${id}`))
    );
  }

  updatePokemon(pokemon: Pokemon): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({'content-type': 'application/json'})
    };

    return this.http.put(this.pokemonsUrl, pokemon, httpOptions).pipe(
      tap(_ => PokemonsService.log(`edit pokemon ${pokemon.id}`)),
      catchError(this.handleError<any>(`edit pokemon ${pokemon.id}`, pokemon))
    );
  }

  deletePokemon(pokemon: Pokemon): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({'content-type': 'application/json'})
    };

    const url = `${this.pokemonsUrl}/${pokemon.id}`;

    return this.http.delete(url, httpOptions).pipe(
      tap(_ => PokemonsService.log(`Delete pokemon ${pokemon.id}`)),
      catchError(this.handleError<any>(`Delete pokemon ${pokemon.id}`, pokemon))
    );
  }


  getPokemonTypes(): string[] {
    return [
      'Feu',
      'Plante',
      'Poison',
      'Eau',
      'Insecte',
      'Normal',
      'Vol',
      'Electrik',
      'Fée'
    ];
  }

}
