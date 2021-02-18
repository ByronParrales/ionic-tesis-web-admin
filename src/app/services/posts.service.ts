import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { RespuestaPost, Post } from '../interfaces/interfaces';
import { UsuarioService } from './usuario.service';
import { ApiServe } from './urlApiService';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';



const URL = ApiServe.url;


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  [x: string]: any;
  token: string = null;
  paginasPost = 0;

  nuevoPost = new EventEmitter<Post>();

  constructor(private http: HttpClient,
              private userService: UsuarioService
              ) { }
              
// Servivio de Obtner el Aula con el Usuario Logueado
  getPost(pull: boolean = false){
      const headers = new HttpHeaders({
       'x-token': this.userService.token
    });
      if (pull) {
         this.paginasPost = 0;
    }
      this.paginasPost ++;
      // user/
      return this.http.get<RespuestaPost>(`${URL}/posts/user/?pagina=${this.paginasPost}`, { headers});
  }

// Crear Descripcion del Aula
  crearPost( post ) {
    const headers = new HttpHeaders({
      'x-token': this.userService.token
   });

    return new Promise( resolve =>{

    this.http.post(`${URL}/posts/`, post, { headers})
          .subscribe( resp => {
              console.log(resp);
              this.nuevoPost.emit(resp['post']);
              resolve(true);
          });
   });
  }

// Servicio para subir una imagen en la descripcion del aula  
  subirImagen( img: string ) {

    const options: FileUploadOptions = {
      fileKey: 'image',
      headers: {
        'x-token': this.userService.token
      }
    };
    const fileTransfer: FileTransferObject = this.fileTransfer.create();

    fileTransfer.upload( img, `${ URL }/posts/upload`, options )
      .then( data => {
        console.log(data);
      }).catch( err => {
        console.log('error en carga', err);
      });


  }


}
