import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.page.html',
  styleUrls: ['./recherche.page.scss'],
})
export class RecherchePage implements OnInit {

    
  public list: any[];
  public loadlist: any[];
  liste: any[];

  constructor(private angularfirestore: AngularFirestore) {
    this.listUsers();
  }

   ngOnInit() {
    this.angularfirestore.collection('user').valueChanges().subscribe(list => {
      this.list = list;
      this.loadlist = list;
    });
  }

  listUsers(){
    this.angularfirestore.collection('user').valueChanges()
    .subscribe( response => {
      this.list =response;
    });
  }

  initializeItems(): void {
    this.list = this.loadlist;
  }

  search(evt){
    this.initializeItems();
    const searchTerm = evt.srcElement.value;

    if(!searchTerm){
      return;
    }

    this.list= this.list.filter(currentList => {
      if(currentList.nom && searchTerm){
        if (currentList.nom.toLowerCase().indexOf(searchTerm.toLowerCase()) >-1){
          return true;
        }
        return false;
      }
    });
  }

}
