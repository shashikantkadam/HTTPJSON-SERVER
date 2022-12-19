import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllpostsComponent } from './shared/components/allposts/allposts.component';
import { CreatePostComponent } from './shared/components/create-post/create-post.component';
import { UpdatePostComponent } from './shared/components/update-post/update-post.component';

const routes: Routes = [
  {
    path : '', redirectTo : 'dashboard', pathMatch : 'full'
  },
  {
    path : 'dashboard', component : AllpostsComponent
  },
  {
    path : 'createpost', component : CreatePostComponent
  },
  {
    path : 'update/:id', component : UpdatePostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
