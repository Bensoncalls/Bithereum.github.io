import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLearnComponent } from './header-learn.component';

describe('HeaderLearnComponent', () => {
  let component: HeaderLearnComponent;
  let fixture: ComponentFixture<HeaderLearnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderLearnComponent]
    });
    fixture = TestBed.createComponent(HeaderLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
