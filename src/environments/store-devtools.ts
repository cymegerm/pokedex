import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from './environment.prod';

export function instrumentStoreDevtools() {
  return !environment.production ? StoreDevtoolsModule.instrument() : [];
}
