import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { AppState } from '@app/state/app.reducers';
import { Pokemon } from '@app/api/models';
import { pokemonDetail, pokemonDetailRetrieved } from './state/pokemon-detail.selectors';

@Component({
  selector: 'pok-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent implements OnInit {
  pokemonDetailRetrieved$: Observable<boolean>;
  pokemonDetail$: Observable<Pokemon>;

  constructor(private store$: Store<AppState>) {}

  ngOnInit(): void {
    this.pokemonDetailRetrieved$ = this.store$.pipe(select(pokemonDetailRetrieved));
    this.pokemonDetail$ = this.store$.pipe(select(pokemonDetail));
  }
}
