import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RequestRidePage } from './request-ride.page';
import { RequestRidePipe } from '../request-ride.pipe';

const routes: Routes = [
  {
    path: '',
    component: RequestRidePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RequestRidePage, RequestRidePipe]
})
export class RequestRidePageModule {}
