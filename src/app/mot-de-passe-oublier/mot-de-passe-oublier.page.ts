import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController } from '@ionic/angular'; 
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-mot-de-passe-oublier',
  templateUrl: './mot-de-passe-oublier.page.html',
  styleUrls: ['./mot-de-passe-oublier.page.scss'],
})
export class MotDePasseOublierPage implements OnInit {

  constructor(  private loadincontroller: LoadingController, private alertCtrl: AlertController) { }

  ngOnInit() {
  }


async alertPresent(){
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



  async show(form: NgForm) {
    const loading = this.loadincontroller.create({
      message: 'loading',
      showBackdrop: false,
      //duration: 2000,
      spinner: 'bubbles'
    });
    (await loading).present(); 

    if(form.value["email"] !=null){
      (await loading).dismiss();
      this.alertPresent();
    }
  }
  }