import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Post {
  user: string,
  id: number
};

@Injectable()
export class DataService {
  public ROOT_URL = 'http://jsonplaceholder.tyicode.com';
  constructor(private http: HttpClient) { }

  getPosts () {
    return this.http.get<Post[]>(`${this.ROOT_URL}/posts`)
  }
}
