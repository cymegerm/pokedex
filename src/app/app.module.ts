import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { RouterState, RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';

// Path alias cannot be used for the line below for compatibility with the test setup
import { instrumentStoreDevtools } from '../environments/store-devtools';
import { metaReducers, reducers } from './state/app.reducers';
import { AppRoutingModule } from './app-routing.module';
import { CustomRouterSerializer } from './utils/router';
import { AppEffects } from './state/app.effects';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PokemonListModule } from '@app/pokemon-list/pokemon-list.module';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PokemonListModule,
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
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal,
    }),
    instrumentStoreDevtools(),
  ],
  providers: [{ provide: RouterStateSerializer, useClass: CustomRouterSerializer }],
  bootstrap: [AppComponent],
})
export class AppModule {}
