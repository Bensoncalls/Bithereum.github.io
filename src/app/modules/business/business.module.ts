import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessComponent } from './business/business.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [BusinessComponent],
  imports: [CommonModule, TranslateModule],
  exports: [BusinessComponent]
})
export class BusinessModule {}
