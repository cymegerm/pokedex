import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { pokemonListReducer } from '@app/pokemon-list/state/pokemon-list.reducer';
import { pokemonDetailReducer } from '@app/pokemon-detail/state/pokemon-detail.reducer';

export interface AppState {}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  pokemonList: pokemonListReducer,
  pokemonDetail: pokemonDetailReducer,
};

export const metaReducers: MetaReducer<AppState>[] = [];
