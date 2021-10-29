import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular'; 
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-mot-de-passe-oublier',
  templateUrl: './mot-de-passe-oublier.page.html',
  styleUrls: ['./mot-de-passe-oublier.page.scss'],
})
export class MotDePasseOublierPage implements OnInit {

  constructor(  private loadincontroller: LoadingController, private alertCtrl: AlertController) { }
  async show() {
    const loading = this.loadincontroller.create({
      message: 'loading',
      duration: 5000,
      showBackdrop: false,
      spinner: 'bubbles'
    });
    (await loading).present();
    setTimeout(async ()=>{
      (await loading).dismiss();
    },1000);
    const alert = await this.alertCtrl.create({
      header:"Confirmation",
      subHeader:"Email",
      message:"veuillez verifier dans votre mail",
      buttons: [
        {
          text:"Ok",
          handler: () => {
  
          }
        }
  
      ]
  
    });
    await alert.present()
  }
    ngOnInit() {
    }
  
  }