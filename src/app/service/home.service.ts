import { Injectable } from '@angular/core';
import { FfreeService } from '../ffree.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _service: FfreeService) { }

  getAllPost() {
    return this._service.getAllPost('api/posts');
  }

  createPost(postContent: Object) {
    return this._service.createPost('api/posts', postContent)
  }

  getSinglePost(id: any) {
    return this._service.getSinglePost('api/posts', id)
  }

  updatePost(id: any, postContent: Object) {
    return this._service.patchPost('api/posts', id, postContent)
  }

  deletePost(id: any) {
    return this._service.deletePost('api/posts', id)
  }
}
