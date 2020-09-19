import { createReducer, on } from '@ngrx/store';
import { Pokemon } from '@app/api/models';
import { PokemonDetailActions } from './pokemon-detail.action-types';

export interface PokemonDetailState {
  pokemonDetail: Pokemon;
}

export const initialPokemonDetailState: PokemonDetailState = {
  pokemonDetail: undefined,
};

export const pokemonDetailReducer = createReducer(
  initialPokemonDetailState,
  on(PokemonDetailActions.pokemonDetailRequested, (state, action) => {
    return state;
  }),

  on(PokemonDetailActions.pokemonDetailRetrieved, (state, action) => {
    return {
      ...state,
      pokemonDetail: action.pokemon,
    };
  }),
);
