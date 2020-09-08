import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { instrumentStoreDevtools } from '@environments/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, instrumentStoreDevtools()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
