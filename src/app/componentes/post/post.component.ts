import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { on } from 'process';
import { Post } from '../../interfaces/interfaces';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  @Input() post: Post = {};
 

  slideSoloOpts = {
    allowSlideNext: false,
    allowSlidePrev: false
  };

  img1 = '/assets/image-1.jpg';
  img2 = '/assets/image-2.jpg';
  img3 = '/assets/image-3.jpg';

  constructor(private http: HttpClient) { }
  ngOnInit() {

  }

  abrirAula() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
   
    return this.http.get('http://192.168.0.115/off').subscribe(data => {
      console.log(data);
    });
            
  }

  /*    const header = {
    headers:headers
  };

  const reponse =*/

  cerrarAula() {
    this.http.get('http://192.168.0.115/on').subscribe(data => {
      console.log(data);
    });
  }

}
