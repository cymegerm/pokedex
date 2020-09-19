import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';

import { PokemonListService } from '@app/api/services';
import { metaReducers, reducers } from '@app/state/app.reducers';
import { pokemonListRoutes } from '../pokemon-list-routing.module';
import { PokemonListModule } from '../pokemon-list.module';
import { PokemonListEffects } from './pokemon-list.effects';

describe('PokemonListEffects', () => {
  let actions$: Observable<any>;
  let effects: PokemonListEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        PokemonListModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        EffectsModule.forRoot([PokemonListEffects]),
        RouterTestingModule.withRoutes(pokemonListRoutes),
      ],
      providers: [PokemonListService, PokemonListEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject<PokemonListEffects>(PokemonListEffects);
  });

  it('should create the pokemon-list effects', () => {
    expect(effects).toBeTruthy();
  });
});
