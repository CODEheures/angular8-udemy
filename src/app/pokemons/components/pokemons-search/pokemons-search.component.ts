import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {PokemonsService} from '../../services/pokemons.service';
import { Pokemon } from '../../models/pokemon';
import {Observable, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemons-search.component.html',
  styleUrls: ['./pokemons-search.component.scss']
})
export class PokemonsSearchComponent implements OnInit {

  private searchTerms = new Subject<string>();
  private pokemons$: Observable<Pokemon[]>;

  constructor(private router: Router, private pokemonsService: PokemonsService) {}

  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.pokemonsService.searchPokemons(term))
    );
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  gotoDetail(pokemon: Pokemon): void {
    this.router.navigate(['/pokemon', pokemon.id]);
  }

}
