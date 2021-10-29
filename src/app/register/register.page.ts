import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { NavController, ToastController } from '@ionic/angular';
import { AuthentificationService } from '../authentification.service';
import { LoadingController } from '@ionic/angular'; 
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  nom: string;
  prenom : string;
  email: string;
  password: string;



  constructor(
    private fireAuth: AngularFireAuth,
   public service: AuthentificationService,
 
   private firestore: AngularFirestore,
   private navCtrl: NavController,
   private loadincontroller: LoadingController,
   private router: Router,
   private toastr: ToastController,
  ) { }

  ngOnInit() {

  }


  async register()
  {
    if(this.nom && this.prenom && this.email && this.password)
    {
      const loading = await this.loadincontroller.create({
        message: 'proccessing..',
        spinner: 'crescent',
        showBackdrop: true
      });

      loading.present();

      this.fireAuth.createUserWithEmailAndPassword(this.email, this.password).
      then((res)=>{
        res.user.sendEmailVerification();
        this.firestore.collection('user').doc(res.user.uid).set({
          'userId': res.user.uid,
          'nom': this.nom,
          'prenom': this.prenom,
          'email': this.prenom,
        })
          .then(()=>{
            loading.dismiss();
            this.toast('Merci, votre compte a bien été créé ! veuillez verifier votre boîtr mail', 'success');
            this.router.navigate(['login']);
          })
        .catch(error =>{
          loading.dismiss();
          this.toast(error.message, 'danger');
        })

      })
      .catch(error =>{
        this.toast(error.message, 'danger');
        loading.dismiss();
      })
    } else{
      this.toast('svp veuillez renseigner tous les champs', 'warning');
    }
  }//fin pour étape de register

  async toast(message, statut)
  {
    const toast = await this.toastr.create({
      message: message,
      color: status,
      position: 'bottom',
      duration: 2000,
    });

     toast.present();
  }//find de toast


}
    