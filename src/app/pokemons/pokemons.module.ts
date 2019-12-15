import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import {PokemonsRoutingModule} from './pokemons-rounting.module';

import { PokemonListComponent } from './components/pokemons-list/pokemon-list.component';
import { PokemonDetailComponent } from './components/pokemons-details/pokemon-details.component';
import { PokemonFormComponent } from './components/pokemon-form/pokemon-form.component';
import { PokemonsEditComponent } from './components/pokemons-edit/pokemons-edit.component';

import { BorderCardDirective } from './directives/border-card.directive';
import { PokemonTypeColorPipe } from './pipes/pokemon-type.pipe';
import {PokemonsService} from './services/pokemons.service';

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    PokemonsEditComponent,
    PokemonFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PokemonsRoutingModule
  ],
  providers: [PokemonsService]
})
export class PokemonsModule { }
