import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private navCtrl: NavController,
              public router: Router) { }

  ngOnInit() {
  }

  abrirInfo() {
    this.navCtrl.navigateForward('/info');
  }

  abrirLogin() {
    // this.navCtrl.navigateForward('/tabs/tab1');
    this.navCtrl.navigateForward('/login');
    // this.router.navigate(['/tabs/tab1']);
  }


}
