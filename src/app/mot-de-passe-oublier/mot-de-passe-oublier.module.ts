import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MotDePasseOublierPageRoutingModule } from './mot-de-passe-oublier-routing.module';

import { MotDePasseOublierPage } from './mot-de-passe-oublier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MotDePasseOublierPageRoutingModule
  ],
  declarations: [MotDePasseOublierPage]
})
export class MotDePasseOublierPageModule {}
