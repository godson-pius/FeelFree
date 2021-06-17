import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private _service: HomeService) { }

  created: boolean = false;

  ngOnInit(): void {
    
  }

  onSubmit(postForm:any): void {
    this._service.createPost(postForm.value).subscribe((res) => {
      this.created = true
      postForm.reset({})
      this.closeAlert()
    }, (err) => {
      this.created = false
    })
  }

  closeAlert() {
    setTimeout(() => {
      this.created = false;
    }, 4000);
  }



}
