import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearnComponent } from './learn/learn.component';
import { LearnRoutingModule } from './learn-routing.module';
import { HeaderModule } from '../header/header.module';
import { YtVideosComponent } from './yt-videos/yt-videos.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [LearnComponent, YtVideosComponent],
  imports: [CommonModule, LearnRoutingModule, HeaderModule, TranslateModule],
  exports: [LearnComponent, YtVideosComponent],
})
export class LearnModule {}
