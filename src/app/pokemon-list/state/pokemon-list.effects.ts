import { Injectable } from '@angular/core';
import { concatMap, map } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { Pokemon } from '@app/api/models';
import { PokemonListService } from '@app/api/services';
import { PokemonListActions } from './pokemon-list.action-types';

@Injectable()
export class PokemonListEffects {
  constructor(private actions$: Actions, private pokemonList$: PokemonListService) {}

  retrievePokemonList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PokemonListActions.pokemonListRequested),
      concatMap((action) => {
        return this.pokemonList$.retrievePokemonList(action.offset, action.limit);
      }),
      map((response: { payload: Pokemon[] }) => {
        return PokemonListActions.pokemonListRetrieved({ list: response.payload });
      }),
    ),
  );
}
