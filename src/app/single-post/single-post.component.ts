import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  constructor(private _service: HomeService, private route: ActivatedRoute, private router: Router) { }
  singlePost: any;
  alertErr: any;
  confirmDel: any;

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this._service.getSinglePost(params.id).subscribe((res) => {
        this.singlePost = res
      }, (err) => {
        this.alertErr = err.error.message
      })
    })
    
  } //= End of ngOnInit

  //= DELETE function
  deletePost(id: any) {
    this.confirmDel = confirm('Are you sure you want to delete post')
    if(this.confirmDel) {
      this._service.deletePost(id).subscribe((res) => {
        alert('Deleted');
        this.router.navigate(['/'])
      })
    }

  }




}
