import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  constructor(private translate: TranslateService) {
  }
  getCurrentYear(): number {
    return new Date().getFullYear();
  }
  sections = [
    {
      title: this.translate.instant('products'),
      links: [
        {
          text: this.translate.instant('spot'),
          url: 'http://daniel-espanadero.com',
        },
        {
          text: this.translate.instant('inverse-perpetual'),
          url: 'http://daniel-espanadero.com',
        },
        {
          text: this.translate.instant('usdt-perpetual'),
          url: 'http://daniel-espanadero.com',
        },
        {
          text: this.translate.instant('exchange'),
          url: 'http://daniel-espanadero.com',
        },
        {
          text: this.translate.instant('launchpad'),
          url: 'http://daniel-espanadero.com',
        },
        {
          text: this.translate.instant('binance-pay'),
          url: 'http://daniel-espanadero.com',
        },
      ],
    },
    {
      title: this.translate.instant('services'),
      links: [
        {
          text: this.translate.instant('buy-crypto'),
          url: 'http://daniel-espanadero.com',
        },
        {
          text: this.translate.instant('markets'),
          url: 'http://daniel-espanadero.com',
        },
        {
          text: this.translate.instant('trading-fee'),
          url: 'http://daniel-espanadero.com',
        },
        {
          text: this.translate.instant('affiliate-program'),
          url: 'http://daniel-espanadero.com',
        },
        {
          text: this.translate.instant('referral-program'),
          url: 'http://daniel-espanadero.com',
        },
        {
          text: this.translate.instant('api'),
          url: 'http://daniel-espanadero.com',
        },
      ],
    },
    {
      title: this.translate.instant('support'),
      links: [
        {
          text: this.translate.instant('bybit-learn'),
          url: 'http://daniel-espanadero.com',
        },
        {
          text: this.translate.instant('helper-center'),
          url: 'http://daniel-espanadero.com',
        },
        {
          text: this.translate.instant('user-feedback'),
          url: 'http://daniel-espanadero.com',
        },
        {
          text: this.translate.instant('submit-a-request'),
          url: 'http://daniel-espanadero.com',
        },
        {
          text: this.translate.instant('api-documentation'),
          url: 'http://daniel-espanadero.com',
        },
        {
          text: this.translate.instant('trading-rules'),
          url: 'http://daniel-espanadero.com',
        },
      ],
    },
    {
      title: this.translate.instant('about-us'),
      links: [
        {
          text: this.translate.instant('about-ibercoin'),
          url: 'http://daniel-espanadero.com',
        },
        {
          text: this.translate.instant('authenticity-check'),
          url: 'http://daniel-espanadero.com',
        },
        {
          text: this.translate.instant('careers'),
          url: 'http://daniel-espanadero.com',
        },
        {
          text: this.translate.instant('business-contacts'),
          url: 'http://daniel-espanadero.com',
        },
        {
          text: this.translate.instant('blog'),
          url: 'http://daniel-espanadero.com',
        },
      ],
    },
  ];
}
