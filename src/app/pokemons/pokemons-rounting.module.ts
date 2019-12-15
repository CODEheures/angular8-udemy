import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PokemonListComponent} from './components/pokemons-list/pokemon-list.component';
import {PokemonDetailComponent} from './components/pokemons-details/pokemon-details.component';
import { PokemonsEditComponent } from './components/pokemons-edit/pokemons-edit.component';

const pokemonsRoutes: Routes = [
  {path: 'pokemons', component: PokemonListComponent},
  {path: 'pokemon/edit/:id', component: PokemonsEditComponent},
  {path: 'pokemon/:id', component: PokemonDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(pokemonsRoutes)],
  exports: [RouterModule]
})
export class PokemonsRoutingModule {}
