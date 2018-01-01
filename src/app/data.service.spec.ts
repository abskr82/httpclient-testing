import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from './data.service';

export interface Post {
  user: string,
  id: number
}

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });
    service = TestBed.get(DataService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('Should retrieve posts', () => {
    const dp: Post[] = [{
      user: 'a',
      id: 1
    }];

    service.getPosts().subscribe(p => {
      expect(p.length).toBe(1);
      expect(p).toEqual(dp);
    })

    const req = httpMock.expectOne(`${service.ROOT_URL}/posts`);
    expect(req.request.method).toBe('GET');
    req.flush(dp);

  });
});
