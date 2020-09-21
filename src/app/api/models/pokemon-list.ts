import { Pokemon } from './pokemon';

export interface PokemonList {
  retrieved: boolean;
  cached: boolean;
  offset: number;
  limit: number;
  maxLength: number;
  items: Pokemon[];
}
