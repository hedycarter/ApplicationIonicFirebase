import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';




@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  navigate: any
  constructor(
    public router: Router,
    private fireAuth: AngularFireAuth,
    private navCtrl: NavController,
    private loadingController: LoadingController,
  ) {
    this.sideMenu();
  }

  sideMenu(){
    this.navigate = [
      {
        title : "Accueil",
        icon: "Home",
        url : "/accueil"
      },
      {
        title : "Mon Profile",
        icon:  "people-circle-outline",
        url : "/profile"
      },
      
      {
        title : "Recherche",
        icon:  "search-outline",
        url : "/recherche"
      },
      {
        title : "Reset",
        icon:  "refresh-outline",
        url : "/reset"
      },
    
    
      {
        title : "Deconnexion",
        icon: "log-out-outline",
        url : "/home"
      },

    ]
  }

  async deconnexion() {
    const loading = this.loadingController.create({
      message: 'Deconexion encour...',
      duration: 5000,
      showBackdrop: false,
      spinner: 'bubbles'
    });

    (await loading).present();
    setTimeout(async ()=>{
      (await loading).dismiss();
    },2000);
   // console.log(this.username);
    if(this.fireAuth.currentUser){
      this.fireAuth.signOut().then(()=>{
        this.navCtrl.navigateForward(['home'])
      });
    }
   


  }

  async accueil() {
       this.router.navigate(['/accueil']);
 
   }

   
}
