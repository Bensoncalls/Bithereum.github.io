import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderLearnComponent } from './header-learn/header-learn.component';

@NgModule({
  declarations: [HeaderComponent, HeaderLearnComponent],
  imports: [CommonModule, TranslateModule],
  exports: [HeaderComponent, HeaderLearnComponent],
})
export class HeaderModule {}
