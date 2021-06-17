import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  ActivatedRoute,
  Params,
  Router
} from '@angular/router';
import {
  HomeService
} from '../service/home.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  constructor(private _service: HomeService, private _route: ActivatedRoute, private _router: Router) {}

  //= Building the form with reactive forms
  editPost = new FormGroup({
    title: new FormControl(''),
    content: new FormControl('')
  })

  updated: boolean = false
  errorHandler: any;
  postId: any;
  // title: any;
  currentpost: any;


  ngOnInit(): void {
    
    this._route.params.subscribe((param: Params) => {
      this._service.getSinglePost(param.postId).subscribe((result) => {
        this.currentpost = result
        
        this.editPost.setValue({
          title: this.currentpost.title,
          content: this.currentpost.content
        })
      })
    })

  }

  onSubmit() {
    this.postId = this._route.snapshot.params.postId
    this._service.updatePost(this.postId, this.editPost.value).subscribe((res) => {
      this.updated = true
      this.closeAlert()
      //= Redirect User to the home page
      this.redirectUser()
    })
  }

  closeAlert() {
    setTimeout(() => {
      this.updated = false;
    }, 2000);
  }

  redirectUser() {
    setTimeout(() => {
      this._router.navigate([''])
    }, 3000);
  }

}
