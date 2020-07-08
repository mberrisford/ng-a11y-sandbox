import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideRegionComponent } from './aside-region.component';

describe('AsideRegionComponent', () => {
  let component: AsideRegionComponent;
  let fixture: ComponentFixture<AsideRegionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsideRegionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
