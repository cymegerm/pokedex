import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '@app/shared/shared.module';
import { PokemonDetailRoutingModule } from './pokemon-detail-routing.module';
import { PokemonDetailComponent } from './pokemon-detail.component';
import { PokemonDetailEffects } from './state/pokemon-detail.effects';

@NgModule({
  declarations: [PokemonDetailComponent],
  imports: [CommonModule, SharedModule, PokemonDetailRoutingModule, EffectsModule.forFeature([PokemonDetailEffects])],
})
export class PokemonDetailModule {}
