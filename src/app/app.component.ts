import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ibercoin';

  constructor(private translate: TranslateService) {
    const userLang = navigator.language.toLowerCase();

    if (userLang === 'es') {
      translate.setDefaultLang(userLang);
      translate.use(userLang);
    } else {
      translate.setDefaultLang('en');
      translate.use('en');
    }
  }
}
