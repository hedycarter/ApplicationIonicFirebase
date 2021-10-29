import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NavController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular'; 
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor
  (
    private navCtrl: NavController,
    private  firebaseAuth: AngularFireAuth,
    private toastr: ToastController,
    private loadincontroller: LoadingController) { }

    gotoaccueil(){
      this.navCtrl.navigateForward(['accueil'])
    }


  ngOnInit() {
  }

    login()
    {
      if(this.email && this.password)
      {
        this.firebaseAuth.signInWithEmailAndPassword(this.email, this.password).then(res => {
          this.navCtrl.navigateForward(['accueil'])
        })
        

      }else {
        this.toast('svp, veuillez rentrer votre votre mail & mot de passe !', 'warning')        
      }
    }
  async toast(message, status): Promise<void>
  {
    const toast = await this.toastr.create({
      message: message,
      color: status,
      position: 'bottom',
      duration: 2000,
    });
    toast.present();
  }

}