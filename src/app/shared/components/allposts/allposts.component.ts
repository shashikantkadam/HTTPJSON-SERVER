import { Component, OnInit } from '@angular/core';
import { IPost } from '../../models/post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-allposts',
  templateUrl: './allposts.component.html',
  styleUrls: ['./allposts.component.scss']
})
export class AllpostsComponent implements OnInit {
postArray : IPost[] =[]
  constructor(private postservice : PostsService) { }

  ngOnInit(): void {
    this.getAllposts()
  }

  getAllposts(){
    this.postservice.getAllPosts().subscribe(res=>{
      this.postArray = res
    }
    )
            
  }

  OnPostDelete(id:number){
    this.postservice.DeletePost(id)
            .subscribe(res=>{
              this.postArray = this.postArray.filter(post => post.id !== id)
            })
  }

}
