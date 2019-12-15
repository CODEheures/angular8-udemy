import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PokemonsService} from '../../services/pokemons.service';
import {Pokemon} from '../../models/pokemon';

@Component({
  selector: 'app-pokemons-edit',
  templateUrl: './pokemons-edit.component.html',
  styleUrls: ['./pokemons-edit.component.scss']
})
export class PokemonsEditComponent implements OnInit {


  private pokemon: Pokemon;

  constructor(private route: ActivatedRoute, private pokemonsService: PokemonsService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pokemon = this.pokemonsService.getPokemon(id);
  }


}
