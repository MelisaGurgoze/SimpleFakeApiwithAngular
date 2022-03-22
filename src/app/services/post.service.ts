import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  static getAll() {
    throw new Error('Method not implemented.');
  }
  apiUrl="http://localhost:3000/posts"

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<Post[]>{
    return this.httpClient.get<Post[]>(this.apiUrl)
  }
}
