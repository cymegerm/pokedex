import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon-list.component';
import { PokemonListResolver } from '@app/pokemon-list/state/pokemon-list.resolver';

export const pokemonListRoutes: Routes = [
  {
    path: '',
    component: PokemonListComponent,
    resolve: { pokemonList: PokemonListResolver },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
  },
  {
    path: ':id',
    loadChildren: () => import('../pokemon-detail/pokemon-detail.module').then((mod) => mod.PokemonDetailModule),
  },
  {
    path: '**',
    redirectTo: '/page-not-found',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(pokemonListRoutes)],
  exports: [RouterModule],
  providers: [PokemonListResolver],
})
export class PokemonListRoutingModule {}
