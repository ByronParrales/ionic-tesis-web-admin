import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/interfaces';
import { UsuarioService } from '../../services/usuario.service';
import { NgForm } from '@angular/forms';
import { UiServiceService } from '../../services/ui-service.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  usuario: Usuario = {};

  constructor(private userService: UsuarioService,
              private uiService: UiServiceService,
              private postService: PostsService) { }

  ngOnInit() {
      this.usuario = this.userService.getUsuario();
      console.log(this.usuario);
  }

  async actualizar(fActualizar: NgForm) {
    if (fActualizar.invalid) { return; }
    const actualizado = await this.userService.actualizarUsuario(this.usuario);

    if ( actualizado) {
      // tosta con el mensaje de actualizado
      this.uiService.presentToast('Registro Actualizado');
    } else {
      this.uiService.presentToast('No se actualizo');
    }

  }

  logout() {
    this.postService.paginasPost = 0;
    this.userService.logout();
  }

}
