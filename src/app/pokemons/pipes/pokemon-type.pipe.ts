import { Pipe, PipeTransform } from '@angular/core';

/*
 * Affiche la couleur correspondant au type du pokémon.
 * Prend en argument le type du pokémon.
 * Exemple d'utilisation:
 *   {{ pokemon.type | pokemonTypeColor }}
*/
@Pipe({name: 'pokemonTypeColor'})
export class PokemonTypeColorPipe implements PipeTransform {
  transform(type: string): string {

    let color: string;

    switch (type.toLowerCase()) {
      case 'feu':
        color = 'red lighten-1';
        break;
      case 'eau':
        color = 'blue lighten-1';
        break;
      case 'plante':
        color = 'green lighten-1';
        break;
      case 'insecte':
        color = 'brown lighten-1';
        break;
      case 'normal':
        color = 'grey lighten-3';
        break;
      case 'vol':
        color = 'blue lighten-3';
        break;
      case 'poison':
        color = 'deep-purple accent-1';
        break;
      case 'fée':
        color = 'pink lighten-4';
        break;
      case 'psy':
        color = 'deep-purple darken-2';
        break;
      case 'electrik':
        color = 'lime accent-1';
        break;
      case 'combat':
        color = 'deep-orange';
        break;
      default:
        color = 'grey';
        break;
    }

    return 'chip ' + color;

  }
}
