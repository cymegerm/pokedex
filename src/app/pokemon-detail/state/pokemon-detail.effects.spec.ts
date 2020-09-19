import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable } from 'rxjs';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';

import { metaReducers, reducers } from '@app/state/app.reducers';
import { PokemonDetailModule } from '../pokemon-detail.module';
/*import { PokemonDetailEffects } from './pokemon-detail.effects';*/

xdescribe('PokemonDetailEffects', () => {
  let actions$: Observable<any>;
  /*let effects: PokemonDetailEffects;*/

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        PokemonDetailModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        /*EffectsModule.forRoot([PokemonDetailEffects]),*/
      ],
      providers: [/*PokemonDetailService,*/ /*PokemonDetailEffects,*/ provideMockActions(() => actions$)],
    });

    /*effects = TestBed.inject<PokemonDetailEffects>(PokemonDetailEffects);*/
  });

  it('should create the pokemon-detail effects', () => {
    /*expect(effects).toBeTruthy();*/
  });
});
