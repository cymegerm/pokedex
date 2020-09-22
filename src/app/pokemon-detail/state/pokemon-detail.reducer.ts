import { createReducer, on } from '@ngrx/store';
import { Pokemon } from '@app/api/models';
import { PokemonDetailActions } from './pokemon-detail.action-types';

export interface PokemonDetailState {
  retrieved: boolean;
  detail: Pokemon;
}

export const initialPokemonDetailState: PokemonDetailState = {
  retrieved: false,
  detail: null,
};

export const pokemonDetailReducer = createReducer(
  initialPokemonDetailState,
  // @ts-ignore
  on(PokemonDetailActions.pokemonDetailRequested, (state, action) => {
    return {
      ...state,
      retrieved: false,
      detail: {
        id: action.id,
      },
    };
  }),

  on(PokemonDetailActions.pokemonDetailRetrieved, (state, action) => {
    return {
      ...state,
      retrieved: true,
      detail: action.pokemon,
    };
  }),
);
