import { MockComponent, MockedComponent, MockRender, ngMocks } from 'ng-mocks';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from '../app/components/card/card.component'
import { CollapseComponent } from '../app/components/collapse/collapse.component'
import { GameCarouselComponent } from '../app/components/game-carousel/game-carousel.component'
import { InfoPaneComponent } from '../app/components/info-pane/info-pane.component'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';




import { BoardComponent } from '../app/components/board/board.component'
describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ NzGridModule, NzCardModule, NzCollapseModule, NzCarouselModule],
      declarations: [ 
        BoardComponent, 
        MockComponent(CardComponent), 
        MockComponent(CollapseComponent), 
        MockComponent(GameCarouselComponent), 
        MockComponent(InfoPaneComponent) 
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
