import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { Pokemon } from '@app/api/models';
import { PokemonList } from '@app/api/models/pokemon-list';
import { AppState } from '@app/state/app.reducers';
import { pokemonList, pokemonListParams, pokemonListRetrieved } from './state/pokemon-list.selectors';

@Component({
  selector: 'pok-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  pokemonListParams$: Observable<{ offset: number; limit: number }>;
  pokemonListRetrieved$: Observable<boolean>;
  pokemonList$: Observable<PokemonList>;
  pokemonListOffset: number;
  pokemonListLimit: number;
  pokemonListMaxLength: number;
  pokemonListItems: Pokemon[];

  constructor(private store$: Store<AppState>, private router: Router, private location: Location) {}

  ngOnInit(): void {
    this.pokemonListParams$ = this.store$.pipe(select(pokemonListParams));
    this.pokemonListRetrieved$ = this.store$.pipe(select(pokemonListRetrieved));
    this.pokemonList$ = this.store$.pipe(select(pokemonList));

    this.pokemonList$.subscribe((list) => {
      this.pokemonListOffset = +list.offset;
      this.pokemonListLimit = +list.limit;
      this.pokemonListMaxLength = +list.maxLength;
      this.pokemonListItems = list.items.slice(+list.offset, +list.offset + +list.limit);
    });
  }

  retrieveMorePokemons() {
    if (this.pokemonListOffset >= this.pokemonListMaxLength) {
      return;
    }

    this.router.navigate(['/pokedex'], {
      queryParams: { offset: this.pokemonListOffset + this.pokemonListLimit, limit: this.pokemonListLimit },
    });
  }

  retrievePreviousPokemons() {
    return this.location.back();
  }

  navigateToPokemonDetail(id: string) {
    this.router.navigateByUrl(`/pokedex/${id}`);
  }
}
