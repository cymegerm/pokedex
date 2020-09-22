import { Injectable } from '@angular/core';
import { concatMap, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { Pokemon } from '@app/api/models';
import { PokemonDetailService } from '@app/api/services';
import { AppState } from '@app/state/app.reducers';
import { PokemonDetailActions } from './pokemon-detail.action-types';

@Injectable()
export class PokemonDetailEffects {
  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private pokemonDetail$: PokemonDetailService,
  ) {}

  retrievePokemonDetail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PokemonDetailActions.pokemonDetailRequested),
      concatMap((action) => {
        return this.pokemonDetail$.retrievePokemonDetail(action.id);
      }),
      map((pokemon: Pokemon) => {
        return PokemonDetailActions.pokemonDetailRetrieved({ pokemon });
      }),
    ),
  );
}
