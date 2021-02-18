import { Component, OnInit } from '@angular/core';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { Usuario } from '../../interfaces/interfaces';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

registerUser: Usuario = {
    email: '@uleam.edu.ec',
    nombre: 'Docente',
    password: 'Facci123',
    avatar: 'av-1.png'
  };

  constructor(private userService: UsuarioService,
              private uiService: UiServiceService,) { }

  ngOnInit() {
  }


  async registro(fRegistro: NgForm){
    // console.log(fRegistro.valid);

    if (fRegistro.invalid) {
      return;
    }

    const valido = await this.userService.registro(this.registerUser);
    if (valido) {
      // navegar al tabs
      // this.navCtrl.navigateRoot('/login', {animated: true});
      this.uiService.alertGlobal('Usuario Creado con Exito');
    } else {
      // Mostrar alerta
      this.uiService.alertGlobal('Correo ya existe');

    }
  }

}
