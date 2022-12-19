import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.scss']
})
export class UpdatePostComponent implements OnInit {
  updatepostform : FormGroup = {} as FormGroup
  constructor( private fb : FormBuilder, private route: ActivatedRoute, private postservice: PostsService) { }

  ngOnInit(): void {
    this.CreateUpdateForm()
    // this.OnUpdatePost()
   this.getEditPostValue()
  
  }
  getEditPostValue(){
    this.route.params
    .subscribe((param : Params)=>{
         console.log(param);
         let id =param['id']
         this.postservice.getSinglePost(id)
              .subscribe(res=>{
                 this.updatepostform.setValue({
                  title : res.title,
                  body : res.body
                }) 
              })
  
})
  }
  CreateUpdateForm(){
    this.updatepostform = this.fb.group({
      title : ['', [Validators.required]],
      body : ['', [Validators.required]]

    })
  }
  OnUpdatePost(){
    this.route.params
    .subscribe((param : Params)=>{
         console.log(param);
         let id = param['id']
         this.postservice.UpdatePost(id,this.updatepostform.value)
                  .subscribe(res =>{
                    console.log(res);
                    
                  })
        })
    
  }

}
