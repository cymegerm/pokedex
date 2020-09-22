import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailComponent } from './pokemon-detail.component';
import { PokemonDetailResolver } from './state/pokemon-detail.resolver';

export const pokemonDetailRoutes: Routes = [
  {
    path: '',
    component: PokemonDetailComponent,
    resolve: { pokemon: PokemonDetailResolver },
  },
  {
    path: '**',
    redirectTo: '/page-not-found',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(pokemonDetailRoutes)],
  exports: [RouterModule],
  providers: [PokemonDetailResolver],
})
export class PokemonDetailRoutingModule {}
