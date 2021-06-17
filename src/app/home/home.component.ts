import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _service: HomeService) { }

  posts: any;
  imgCounter = 1;

  ngOnInit(): void {
    this.autoFetch()
    
    setInterval(() => {
      this.autoFetch()
    }, 7000);
  }

  autoFetch() {
    this._service.getAllPost().subscribe((res) => {
      this.posts = res
    }, (err) => {
      console.log(err);
      console.log('Error')
    })
  }

}
