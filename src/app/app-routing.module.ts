import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPostComponent } from './edit-post/edit-post.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { SinglePostComponent } from './single-post/single-post.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'post', component: PostComponent },
  { path: 'post/single/:id', component: SinglePostComponent},
  { path: 'post/edit/:postId', component: EditPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
