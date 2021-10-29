import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LoadingController,ToastController } from '@ionic/angular'
import { Observable, of } from 'rxjs';
import { User } from 'firebase/auth'
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { switchMap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  userData: any;
  profile: Observable<User>;
  user: User;
  userDetail: any;
  constructor(
   public ngFireAuth: AngularFireAuth,
   private loadingCrtl: LoadingController,
   private toastr: ToastController,
   private afs: AngularFirestore,
    ) 
    { 
      this.profile = this.ngFireAuth.authState
        .pipe(
          switchMap( user => {
            if(user){
              return this.afs.doc<User>(`user/${user.uid}`).valueChanges();
            }else{
              return of (null);
            }
          })
        )
    }
 // Login in with email/password

 RegisterNew(email, password) {
  return this.ngFireAuth.createUserWithEmailAndPassword(email, password)
}






 SignIn(email, password) {
  return this.ngFireAuth.signInWithEmailAndPassword(email, password)
}

 // Register user with email/password
 RegisterUser(email, password) {
  return this.ngFireAuth.createUserWithEmailAndPassword(email, password)
}
}
