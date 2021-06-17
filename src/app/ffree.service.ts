import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FfreeService {

  readonly ROOT_URL;

  constructor(private _http:HttpClient) {
    this.ROOT_URL = 'http://localhost:3000';
   }


  getAllPost(uri: string) {
    return this._http.get(`${this.ROOT_URL}/${uri}`);
  }
  
  createPost(uri: string, payload: any) {
    return this._http.post(`${this.ROOT_URL}/${uri}`, payload);
  }

  getSinglePost(uri: string, id: any) {
    return this._http.get(`${this.ROOT_URL}/${uri}/${id}`);
  }
  
  patchPost(uri: string, id: any, payload: any) {
    return this._http.patch(`${this.ROOT_URL}/${uri}/${id}`, payload);
  }

  deletePost(uri: string, id: any) {
    return this._http.delete(`${this.ROOT_URL}/${uri}/${id}`);
  }
}
