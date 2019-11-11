import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PokemonListComponent} from './pokemons-list/pokemon-list.component';
import {PokemonDetailComponent} from './pokemons-details/pokemon-details.component';

const routes: Routes = [
  {path: 'pokemons', component: PokemonListComponent},
  {path: 'pokemon/:id', component: PokemonDetailComponent},
  {path: '', redirectTo: 'pokemons', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
