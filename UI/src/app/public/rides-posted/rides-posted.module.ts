import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RidesPostedPage } from './rides-posted.page';

const routes: Routes = [
  {
    path: '',
    component: RidesPostedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RidesPostedPage]
})
export class RidesPostedPageModule {}
