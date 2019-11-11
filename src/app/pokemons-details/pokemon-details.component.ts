import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from '../../models/pokemon';
import { POKEMONS } from '../../mocks/pokemons';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  pokemons: Pokemon[] = null;
  pokemon: Pokemon = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.pokemons = POKEMONS;

    const id = +this.route.snapshot.paramMap.get('id');
    this.pokemon = this.pokemons.filter((item) => {
      return item.id === id;
    })[0];
  }

  goBack(): void {
    this.router.navigate(['/pokemons']);
  }

}
