import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { first, tap } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';

import { Pokemon } from '@app/api/models';
import { AppState } from '@app/state/app.reducers';
import { PokemonListActions } from './pokemon-list.action-types';
import { pokemonListItems, pokemonListParams } from './pokemon-list.selectors';

@Injectable()
export class PokemonListResolver implements Resolve<any> {
  pokemonListItems$: Observable<Pokemon[]>;
  pokemonListItems: Pokemon[];

  constructor(private store$: Store<AppState>, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    this.pokemonListItems$ = this.store$.pipe(select(pokemonListItems));

    this.pokemonListItems$.subscribe((items) => {
      this.pokemonListItems = items;
    });

    return this.store$.pipe(
      select(pokemonListParams),
      tap((params) => {
        const maxLength = 150;
        let cached = false;
        let offset;
        let limit;

        params.offset ? (offset = +params.offset) : (offset = 0);
        params.limit ? (limit = +params.limit) : (limit = 10);

        if (offset > maxLength - limit || limit > maxLength || offset > this.pokemonListItems) {
          this.router.navigateByUrl('/pokedex');
        }

        if (this.pokemonListItems.indexOf(offset) && offset + limit <= this.pokemonListItems.length) {
          cached = true;
        }

        const pokemonListRequested = PokemonListActions.pokemonListRequested({
          offset,
          limit,
          maxLength,
          cached,
        });

        return this.store$.dispatch(pokemonListRequested);
      }),
      first(),
    );
  }
}
