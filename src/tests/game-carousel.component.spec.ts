import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

import { GameCarouselComponent } from '../app/components/game-carousel/game-carousel.component';

describe('GameCarouselComponent', () => {
  let component: GameCarouselComponent;
  let fixture: ComponentFixture<GameCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ NzCarouselModule ],
      declarations: [ GameCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
