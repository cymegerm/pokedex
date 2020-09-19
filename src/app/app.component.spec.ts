import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { metaReducers, reducers } from './state/app.reducers';
import { AppModule } from './app.module';
import { rootRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppEffects } from './state/app.effects';

describe('AppComponent', () => {
  beforeEach(async () => {
    try {
      await TestBed.configureTestingModule({
        imports: [
          AppModule,
          HttpClientTestingModule,
          StoreModule.forRoot(reducers, {
            metaReducers,
            runtimeChecks: {
              strictStateImmutability: true,
              strictActionImmutability: true,
              strictStateSerializability: true,
              strictActionSerializability: true,
            },
          }),
          EffectsModule.forRoot([AppEffects]),
          RouterTestingModule.withRoutes(rootRoutes),
        ],
      }).compileComponents();
    } catch (error) {
      console.error(error);
    }
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'pokedex'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('pokedex');
  });
});
