import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ModalComponent } from '../app/components/modal/modal.component'
import { WikipediaService } from '../app/services/wikipedia.service'
import { HttpClientTestingModule } from '@angular/common/http/testing'


describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ NzModalModule, HttpClientTestingModule ],
      declarations: [ ModalComponent ],
      providers: [ WikipediaService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
