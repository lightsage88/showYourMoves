import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
// import { Observable } from 'rxjs'
import { WikipediaService } from './wikipedia.service';

describe('WikipediaService', () => {
  let service: WikipediaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ WikipediaService ]
    });
    service = TestBed.inject(WikipediaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
