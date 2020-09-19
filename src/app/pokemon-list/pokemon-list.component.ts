import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { Pokemon } from '@app/api/models';
import { AppState } from '@app/state/app.reducers';
import { pokemonList, pokemonListParams, pokemonListRetrieved } from './state/pokemon-list.selectors';

@Component({
  selector: 'pok-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  pokemonListParams$: Observable<{ offset: string; limit: string }>;
  pokemonList$: Observable<Pokemon[]>;
  pokemonListRetrieved$: Observable<boolean>;

  constructor(private store$: Store<AppState>) {}

  ngOnInit(): void {
    this.pokemonListParams$ = this.store$.pipe(select(pokemonListParams));
    this.pokemonList$ = this.store$.pipe(select(pokemonList));
    this.pokemonListRetrieved$ = this.store$.pipe(select(pokemonListRetrieved));
  }
}
