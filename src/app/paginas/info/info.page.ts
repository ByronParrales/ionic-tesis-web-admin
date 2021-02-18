import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ocultar = '';

  slides: { img: string, nombre: string, desc: string }[] = [
    {
      img: '/assets/imagenes/avatar.jpg',
      nombre: 'Byron Parrales García',
      desc: 'Egresado -- Fronted (Ionic-Angular)'
    }
  ];
  slides1: { img: string, nombre: string, desc: string }[] = [
    {
      img: '/assets/imagenes/logo.png',
      nombre: 'Interaction APP',
      desc: 'Interaction App, es una aplicación que permitira el control y acceso a las aulas de clases de la Facultad De Ciencias Informáticas, facilitando un mayor acceso a los docentes.'
    }
  ];
  slides2: { img: string, nombre: string, desc: string }[] = [
     {
      img: '/assets/imagenes/avatar1.jpeg',
      nombre: 'Jonathan Delgado Moran',
      desc: 'Egresado -- Backend (API)'
    }
  ];
  slides3: { img: string, nombre: string, desc: string }[] = [
    {
     img: '/assets/imagenes/avatar3.jpg',
     nombre: 'Mike Machuca Avalo',
     desc: 'Profesor de Sistemas Digitales'
   }
 ];

  ngOnInit() {
  }

  closeInfo(){
    this.ocultar = 'animated fadeOut fast';
    this.navCtrl.navigateBack('/inicio');
 
  }

}
