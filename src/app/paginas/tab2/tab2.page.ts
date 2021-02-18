import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

declare var window: any;

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  tempImages: string [] = [];

  post = {
    descripcion: ''
  };

  constructor(private postService: PostsService,
              private route: Router,
              private camera: Camera) { }

  ngOnInit() {
  }

  async crearPost(){
    console.log(this.post);
    const creado = await this.postService.crearPost(this.post);

    this.post = {
      descripcion: ''
    };
    this.tempImages = [];
    this.route.navigateByUrl('/main/tabs/tab1');
  }

  camara() {
    const options: CameraOptions = {
      quality: 60,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.CAMERA
    };

    this.procesarImagen( options );
  }

  procesarImagen( options: CameraOptions ) {

    this.camera.getPicture(options).then( ( imageData ) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):

       const img = window.Ionic.WebView.convertFileSrc( imageData );

       this.postService.subirImagen( imageData );
       this.tempImages.push( img );

     }, (err) => {
      // Handle error
     });
  }

}
