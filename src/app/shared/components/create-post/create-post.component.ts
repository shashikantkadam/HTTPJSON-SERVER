import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  postForm : FormGroup = {} as FormGroup
  constructor( private fb : FormBuilder, private postservice: PostsService, private router: Router) { }

  ngOnInit(): void {
    this.cretePostForm()
  }
  OnPostSubmit(){
    console.log(this.postForm.value);
    let userId = Math.floor(Math.random() * 10)
    let obj = {
      userId : userId,
      ...this.postForm.value
    }
    this.postservice.CreatePost(obj)
            .subscribe(res =>{
              console.log(res
                );
              
            })

            this.router.navigate(['/dashboard'])
    
  }
  cretePostForm(){
    this.postForm = this.fb.group({
      title : ['',[Validators.required]],
      body : ['', [Validators.required]]
    })
  }

}
