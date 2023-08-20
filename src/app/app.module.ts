import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './modules/header/header.module';
import { NavModule } from './modules/nav/nav.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HeaderModule, NavModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
