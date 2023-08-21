import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearnComponent } from './learn/learn.component';
import { LearnRoutingModule } from './learn-routing.module';

@NgModule({
  declarations: [LearnComponent],
  imports: [CommonModule, LearnRoutingModule],
  exports: [LearnComponent],
})
export class LearnModule {}
