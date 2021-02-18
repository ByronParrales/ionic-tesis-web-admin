import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/interfaces';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  posts: Post[] = [];

  habilitar = true;

  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.siguientes();

    this.postService.nuevoPost.subscribe(post =>{
        this.posts.unshift( post );
    });
  }

  recargar(event){
    this.siguientes(event, true);
    this.habilitar = true;
    this.posts = [];
  }

  siguientes(event?, pull: boolean = false){

      this.postService.getPost(pull).subscribe(resp => {
     // console.log(resp.posts[0].usuario); // .posts[0].usuario
      this.posts.push(...resp.posts);

      if (event){
        event.target.complete();

        if (resp.posts.length === 0) {
          this.habilitar = false;
        }
      }

      });

  }

}
