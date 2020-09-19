import { createReducer, on } from '@ngrx/store';
import { Pokemon } from '@app/api/models';
import { PokemonListActions } from './pokemon-list.action-types';

export interface PokemonListState {
  retrieved: boolean;
  data: Pokemon[];
}

export const initialPokemonListState: PokemonListState = {
  retrieved: false,
  data: undefined,
};

export const pokemonListReducer = createReducer(
  initialPokemonListState,
  on(PokemonListActions.pokemonListRequested, (state, action) => {
    return state;
  }),

  on(PokemonListActions.pokemonListRetrieved, (state, action) => {
    return {
      ...state,
      retrieved: true,
      data: action.list,
    };
  }),
);
