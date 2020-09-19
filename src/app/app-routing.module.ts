import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSerializer } from '@angular/router';
import { PageNotFoundComponent } from '@app/page-not-found/page-not-found.component';
import { PokemonListResolver } from '@app/pokemon-list/state/pokemon-list.resolver';

export const rootRoutes: Routes = [
  {
    path: '',
    redirectTo: '/pokedex',
    pathMatch: 'full',
  },
  {
    path: 'pokedex',
    loadChildren: () => import('./pokemon-list/pokemon-list.module').then((mod) => mod.PokemonListModule),
    resolve: { pokemonList: PokemonListResolver },
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '/page-not-found',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(rootRoutes, {
      scrollPositionRestoration: 'enabled',
      paramsInheritanceStrategy: 'always',
      relativeLinkResolution: 'corrected',
      malformedUriErrorHandler: (error: URIError, urlSerializer: UrlSerializer, url: string) =>
        urlSerializer.parse('/page-not-found'),
    }),
  ],
  exports: [RouterModule],
  providers: [PokemonListResolver],
})
export class AppRoutingModule {}
