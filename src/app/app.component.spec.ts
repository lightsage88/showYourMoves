import { MockComponent, MockedComponent, MockRender, ngMocks } from 'ng-mocks';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component'
import { ModalComponent } from './components/modal/modal.component'
import { BoardComponent } from './components/board/board.component'
import { AppRoutingModule } from './app-routing.module';
import { NzGridModule } from 'ng-zorro-antd/grid'
import { RouterModule } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AppRoutingModule, RouterModule, NzGridModule ],
      declarations: [
        AppComponent,
        MockComponent(BoardComponent),
        MockComponent(HeaderComponent),
        MockComponent(ModalComponent)
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'showYourMoves'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('showYourMoves');
  });

});
