import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import {AuthentificationService} from '../authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  allUsers : AngularFirestoreCollection;
  liste: Observable<any[]>;
  userData: string;
  user: any;

  constructor(
    public firestore: AngularFirestore, 
    public AuthentificationService: AuthentificationService,
    private router: Router,
    
  ) { }

  ngOnInit() {
    this.AuthentificationService.profile.subscribe(user=>{
      this.user = user;
    });
     this.getUserinfos();
    
  }

  async getUserinfos(){
    this.allUsers = this.firestore.collection('user');
    this.liste = this.allUsers.valueChanges();

  
  }

}
