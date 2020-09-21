import { Injectable } from '@angular/core';
import { exhaustMap, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { Pokemon } from '@app/api/models';
import { PokemonListService } from '@app/api/services';
import { AppState } from '@app/state/app.reducers';
import { PokemonListActions } from './pokemon-list.action-types';
import { of } from 'rxjs';

@Injectable()
export class PokemonListEffects {
  constructor(private actions$: Actions, private store$: Store<AppState>, private pokemonList$: PokemonListService) {}

  retrievePokemonList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PokemonListActions.pokemonListRequested),
      exhaustMap((action) => {
        if (action.cached === true) {
          return of({ payload: [] });
        } else {
          return this.pokemonList$.retrievePokemonList(action.offset, action.limit);
        }
      }),
      map((response: { payload: Pokemon[] }) => {
        return PokemonListActions.pokemonListRetrieved({ items: response.payload });
      }),
    ),
  );
}
