import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverSliderComponent } from './discover-slider.component';

describe('DiscoverSliderComponent', () => {
  let component: DiscoverSliderComponent;
  let fixture: ComponentFixture<DiscoverSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoverSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscoverSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
