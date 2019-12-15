import {Component, Input, OnInit} from '@angular/core';
import {PokemonsService} from '../../services/pokemons.service';
import {Router} from '@angular/router';
import {Pokemon} from '../../models/pokemon';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.scss']
})
export class PokemonFormComponent implements OnInit {

  @Input() pokemon: Pokemon;
  private types: string[];

  constructor(private pokemonsService: PokemonsService, private router: Router) { }

  ngOnInit() {
    this.types = this.pokemonsService.getPokemonTypes();
  }

  hasType(type: string): boolean {
    return (this.pokemon.types.indexOf(type) !== -1);
  }

  selectType($event: any, type: string): void {
    const checked = $event.target.checked;
    if (checked) {
      this.pokemon.types.push(type);
    } else {
      const index = this.pokemon.types.indexOf(type);
      if (index !== -1) {
        this.pokemon.types.splice(index, 1);
      }
    }
  }

  isTypesValid(type: string): boolean {
    return (this.pokemon.types.length < 3 || this.hasType(type));
  }

  onSubmit() {
    console.log('submit');
    const link = ['/pokemon', this.pokemon.id];
    this.router.navigate(link);
  }
}
