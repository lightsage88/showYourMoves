import { MockComponent, MockedComponent, MockRender, ngMocks } from 'ng-mocks';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CardComponent } from '../app/components/card/card.component';
import { InfoPaneComponent } from '../app/components/info-pane/info-pane.component'
import { GameCarouselComponent } from '../app/components/game-carousel/game-carousel.component'
import { CollapseComponent } from '../app/components/collapse/collapse.component'

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NzCardModule],
      declarations: [ 
        CardComponent, 
        MockComponent(InfoPaneComponent),
        MockComponent(GameCarouselComponent),
        MockComponent(CollapseComponent)
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.fighter = {
      id: 1,
      name: "Mario",
      description: "A plumber",
      franchise: {
        name: "Super Mario Bros.",
        id: 1,
        games: [
          {
            id: 1,
            releaseYear: 1996,
            name: "Super Mario 64"
          }
        ],
        company: {
          name: "Nintendo",
          id: 1
        }

      },
      company: {
        id: 1
      },
      image: ''
    
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
