import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CollapseComponent } from '../app/components/collapse/collapse.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';


describe('CollapseComponent', () => {
  let component: CollapseComponent;
  let fixture: ComponentFixture<CollapseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ NzCollapseModule, BrowserAnimationsModule ],
      declarations: [ CollapseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapseComponent);
    component = fixture.componentInstance;
    component.fighter = {
      id: 1,
      name: "Mario",
      description: "A mustachioed good guy plumber",
      image: '',
      franchise: null,
      company: null
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
