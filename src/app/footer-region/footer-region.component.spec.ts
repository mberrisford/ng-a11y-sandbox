import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterRegionComponent } from './footer-region.component';

describe('FooterRegionComponent', () => {
  let component: FooterRegionComponent;
  let fixture: ComponentFixture<FooterRegionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterRegionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
