import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RidesRequestedPage } from './rides-requested.page';

const routes: Routes = [
  {
    path: '',
    component: RidesRequestedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RidesRequestedPage]
})
export class RidesRequestedPageModule {}
