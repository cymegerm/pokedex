/*
import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { concatMap, first, map } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';

import { Pokemon } from '@app/api/models';
import { PokemonDetailService } from '@app/api/services';
import { AppState } from '@app/state/app.reducers';
import { PokemonDetailActions } from './pokemon-detail.action-types';
import { pokemonDetailParams } from './pokemon-detail.selectors';

@Injectable()
export class PokemonDetailResolver implements Resolve<any> {
  pokemonId: string;
  pokemonEvolution: string[];

  constructor(private store$: Store<AppState>, private pokemonDetail$: PokemonDetailService) {}

  recursiveObjectSearch(obj, searchKey: string, results: string[] = []) {
    const r = results;
    Object.keys(obj).forEach((key) => {
      const val = obj[key];
      if (key === searchKey && typeof val === 'object') {
        r.push(val.name);
      } else if (val && typeof val === 'object') {
        this.recursiveObjectSearch(val, searchKey, r);
      }
    });
    return r;
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.store$.pipe(
      select(pokemonDetailParams),
      concatMap((params) => {
        this.pokemonId = params.id;
        return this.pokemonDetail$.retrievePokemonEvolution(params.id);
      }),
      map((response: HttpResponse<any>) => {
        const evolution: string[] = this.recursiveObjectSearch(response.body, 'species');
        this.pokemonEvolution = evolution;
        return;
      }),
      concatMap(() => {
        return this.pokemonDetail$.retrievePokemonDetail(this.pokemonId);
      }),
      map((response: HttpResponse<any>) => {
        const pokemon: Pokemon = {
          id: response.body.id,
          name: response.body.name,
          types: response.body.types,
          species: response.body.species,
          evolution: this.pokemonEvolution,
          abilities: Object.values(response.body.abilities.ability.name),
          image_url: response.body.sprites.front_default,
        };

        const pokemonDetailRetrieved = PokemonDetailActions.pokemonDetailRetrieved({ pokemon });
        return this.store$.dispatch(pokemonDetailRetrieved);
      }),
      first(),
    );
  }
}
*/
