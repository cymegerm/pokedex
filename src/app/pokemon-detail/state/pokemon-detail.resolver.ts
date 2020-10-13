import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { AppState } from '@app/state/app.reducers';
import { PokemonDetailActions } from './pokemon-detail.action-types';

@Injectable()
export class PokemonDetailResolver implements Resolve<any> {
  constructor(private store$: Store<AppState>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.store$.pipe(
      map(() => {
        const id: string = route.params.id;
        const pokemonDetailRequested = PokemonDetailActions.pokemonDetailRequested({ id });
        return this.store$.dispatch(pokemonDetailRequested);
      }),
      first(),
    );
  }
}
