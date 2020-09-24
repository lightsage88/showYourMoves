import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselCollapseComponent } from '../app/components/carousel-collapse/carousel-collapse.component';

describe('CarouselCollapseComponent', () => {
  let component: CarouselCollapseComponent;
  let fixture: ComponentFixture<CarouselCollapseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselCollapseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
