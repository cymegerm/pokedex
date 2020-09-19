import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon-list.component';
/*import { PokemonDetailResolver } from '@app/pokemon-detail/state/pokemon-detail.resolver';*/

export const pokemonListRoutes: Routes = [
  {
    path: '',
    component: PokemonListComponent,
    /*children: [
      {
        path: ':id',
        loadChildren: () => import('../pokemon-detail/pokemon-detail.module').then((mod) => mod.PokemonDetailModule),
        resolve: { pokemon: PokemonDetailResolver },
      },
    ],*/
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
})
export class PokemonListRoutingModule {}
