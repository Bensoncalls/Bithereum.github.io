import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  languages = [
    { code: 'en', name: '🇺🇸' },
    { code: 'es', name: '🇪🇸' },
  ];

  selectedLanguage: string;

  constructor(private translate: TranslateService) {
    this.selectedLanguage = translate.currentLang; // Establece el idioma actual como seleccionado
  }

  changeLanguage() {
    this.translate.setDefaultLang(this.selectedLanguage);
    this.translate.use(this.selectedLanguage);
  }
}
