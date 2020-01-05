import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PokemonListComponent} from './components/pokemons-list/pokemon-list.component';
import {PokemonDetailComponent} from './components/pokemons-details/pokemon-details.component';
import { PokemonsEditComponent } from './components/pokemons-edit/pokemons-edit.component';
import {AuthGuardService} from '../auth/auth-guard.service';

const pokemonsRoutes: Routes = [
  {
    path: 'pokemon',
    canActivate: [AuthGuardService],
    children: [
      {path: 'all', component: PokemonListComponent},
      {path: 'edit/:id', component: PokemonsEditComponent},
      {path: ':id', component: PokemonDetailComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(pokemonsRoutes)],
  exports: [RouterModule]
})
export class PokemonsRoutingModule {}
