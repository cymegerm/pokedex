import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';

import { PokemonDetailService } from '@app/api/services';
import { metaReducers, reducers } from '@app/state/app.reducers';
import { PokemonDetailModule } from '../pokemon-detail.module';
import { PokemonDetailEffects } from './pokemon-detail.effects';

describe('PokemonDetailEffects', () => {
  let actions$: Observable<any>;
  let effects: PokemonDetailEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        PokemonDetailModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        EffectsModule.forRoot([PokemonDetailEffects]),
      ],
      providers: [PokemonDetailService, PokemonDetailEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject<PokemonDetailEffects>(PokemonDetailEffects);
  });

  it('should create the pokemon-detail effects', () => {
    expect(effects).toBeTruthy();
  });
});
