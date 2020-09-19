import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { first, tap } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';

import { AppState } from '@app/state/app.reducers';
import { PokemonListActions } from './pokemon-list.action-types';
import { pokemonListParams } from './pokemon-list.selectors';

@Injectable()
export class PokemonListResolver implements Resolve<any> {
  constructor(private store$: Store<AppState>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.store$.pipe(
      select(pokemonListParams),
      tap((params) => {
        const pokemonListRequested = PokemonListActions.pokemonListRequested({
          offset: params.offset,
          limit: params.limit,
        });
        return this.store$.dispatch(pokemonListRequested);
      }),
      first(),
    );
  }
}
