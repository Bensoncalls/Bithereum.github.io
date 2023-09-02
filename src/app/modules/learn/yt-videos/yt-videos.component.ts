import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-yt-videos',
  templateUrl: './yt-videos.component.html',
  styleUrls: ['./yt-videos.component.scss'],
})
export class YtVideosComponent {
  constructor(private translate: TranslateService) {}

  videos = [
    {
      title: this.translate.instant('title-video-1'),
      description: this.translate.instant('description-video-1'),
      image: '../../../../assets/images/cryptocurrency-video1.jpg',
      link: 'https://www.youtube.com/watch?v=2xklPIKNkDQ',
    },
    {
      title: this.translate.instant('title-video-2'),
      description: this.translate.instant('description-video-2'),
      image: '../../../../assets/images/cryptocurrency-video2.jpg',
      link: 'https://www.youtube.com/watch?v=XnIS77GQz6g',
    },
  ];
}
