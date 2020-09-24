import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPaneComponent } from '../app/components/info-pane/info-pane.component';
import { NzTableModule } from 'ng-zorro-antd/table';



describe('InfoPaneComponent', () => {
  let component: InfoPaneComponent;
  let fixture: ComponentFixture<InfoPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ NzTableModule ],
      declarations: [ InfoPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPaneComponent);
    component = fixture.componentInstance;
    component.fighter = {
      id: 1,
      name: 'name',
      description: 'thing',
      image: '',
      company: 1,
      franchise: {
        fighters: [
          {
            name: "Link",
            id: "3"
          },
          {
            name: "Mario",
            id: "1"
          }
        ]
      }
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
