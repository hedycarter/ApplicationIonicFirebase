import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MotDePasseOublierPage } from './mot-de-passe-oublier.page';

const routes: Routes = [
  {
    path: '',
    component: MotDePasseOublierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MotDePasseOublierPageRoutingModule {}
