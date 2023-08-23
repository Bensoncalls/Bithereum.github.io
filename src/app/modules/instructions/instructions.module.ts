import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructionsComponent } from './instructions/instructions.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [InstructionsComponent],
  imports: [CommonModule, TranslateModule],
  exports: [InstructionsComponent]
})
export class InstructionsModule {}
