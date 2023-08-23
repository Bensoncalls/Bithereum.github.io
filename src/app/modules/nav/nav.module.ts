import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [NavComponent],
  imports: [CommonModule, FormsModule, RouterModule, TranslateModule],
  exports: [NavComponent],
})
export class NavModule {}
