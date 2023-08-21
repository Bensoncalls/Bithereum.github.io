import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 


@NgModule({
  declarations: [NavComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [NavComponent],
})
export class NavModule {}
