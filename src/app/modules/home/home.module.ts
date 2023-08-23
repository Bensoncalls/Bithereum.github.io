import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavModule } from '../nav/nav.module';
import { HeaderModule } from '../header/header.module';
import { HomeRoutingModule } from './home-routing.module';
import { InstructionsModule } from '../instructions/instructions.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, NavModule, HeaderModule, HomeRoutingModule, InstructionsModule],
  exports: [HomeComponent],
})
export class HomeModule {}
