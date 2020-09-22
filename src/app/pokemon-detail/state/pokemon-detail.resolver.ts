import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { first, map, take, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { Pokemon } from '@app/api/models';
import { AppState } from '@app/state/app.reducers';
import { PokemonDetailActions } from './pokemon-detail.action-types';

@Injectable()
export class PokemonDetailResolver implements Resolve<any> {
  constructor(private store$: Store<AppState>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.store$.pipe(
      take(1),
      tap(() => {
        const id: string = route.params.id;
        const pokemonDetailRequested = PokemonDetailActions.pokemonDetailRequested({ id });
        return this.store$.dispatch(pokemonDetailRequested);
      }),
      map((pokemon: Pokemon) => {
        const pokemonDetailRetrieved = PokemonDetailActions.pokemonDetailRetrieved({ pokemon });
        return this.store$.dispatch(pokemonDetailRetrieved);
      }),
      first(),
    );
  }
}
