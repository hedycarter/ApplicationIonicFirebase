import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user : any;
  constructor(
    public autheservice: AuthentificationService,
  ) { }

  ngOnInit() {
    this.autheservice.profile.subscribe(user =>
      {
          this.user = user;
      })
  }

}
