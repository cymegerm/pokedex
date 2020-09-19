import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

import { PokemonListRoutingModule } from './pokemon-list-routing.module';
import { PokemonListComponent } from './pokemon-list.component';
import { PokemonListEffects } from './state/pokemon-list.effects';

@NgModule({
  declarations: [PokemonListComponent],
  imports: [CommonModule, PokemonListRoutingModule, EffectsModule.forFeature([PokemonListEffects])],
})
export class PokemonListModule {}
