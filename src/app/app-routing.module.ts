import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PokemonListComponent} from './pokemons-list/pokemon-list.component';
import {PokemonDetailComponent} from './pokemons-details/pokemon-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'pokemons', component: PokemonListComponent},
  {path: 'pokemon/:id', component: PokemonDetailComponent},
  {path: '', redirectTo: 'pokemons', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
