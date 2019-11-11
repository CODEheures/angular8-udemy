import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemons-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemons-details/pokemon-details.component';

import { BorderCardDirective } from '../directives/border-card.directive';
import { PokemonTypeColorPipe } from '../pipes/pokemon-type.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonDetailComponent,
    BorderCardDirective,
    PokemonTypeColorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
