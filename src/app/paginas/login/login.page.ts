import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';
import { UiServiceService } from '../../services/ui-service.service';

import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('slidePrincipal') slides: IonSlides;
  
  loginUser = {
    email: '',
    password: ''
  };

  

  constructor(private navCtrl: NavController,
              private userService: UsuarioService,
              private uiService: UiServiceService,
              public loadingController: LoadingController) { }

  ngOnInit() {

  }

  ionViewDidEnter() {
    this.slides.lockSwipes(true);
  }
 /* abrirTabs() {
    this.navCtrl.navigateForward('/tabs/tab1');
    // this.router.navigate(['/tabs/tab1']);
  }*/
  async presentLoadingDefault() {
    const loading = await this.loadingController.create({
        message: 'Iniciando Sesion',
        mode: 'ios'
    });
    loading.present();

    setTimeout(() => {
        loading.dismiss();
      }, 1500);
  }

   async login(fLogin: NgForm){

    if (fLogin.invalid) {
      return;
    }

    const valido = await this.userService.login(this.loginUser.email, this.loginUser.password);
    // console.log(this.loginUser);

    if (valido) {
      // navegar al tabs
      this.presentLoadingDefault();
      this.navCtrl.navigateRoot('/main/tabs/tab1', {animated: true});
    } else {
      // Mostrar alerta de usuario y contraseña no correctos
      this.uiService.alertGlobal('Usuario y Contraseña no son correctos');

    }
  }

  mostrarLogin(){
    this.slides.lockSwipes(false);
    this.slides.slideTo(0);
    this.slides.lockSwipes(true);
  }

  mostrarRegistro(){
    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);
  }

}
