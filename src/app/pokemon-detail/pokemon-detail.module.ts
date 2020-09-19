import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

import { PokemonDetailComponent } from './pokemon-detail.component';
/*import { PokemonDetailEffects } from './state/pokemon-detail.effects';*/

@NgModule({
  declarations: [PokemonDetailComponent],
  imports: [CommonModule /*, EffectsModule.forFeature([PokemonDetailEffects])*/],
})
export class PokemonDetailModule {}
