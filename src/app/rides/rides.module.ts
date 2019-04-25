import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RidesPage } from './rides.page';
import { RidesRoutingModule } from './rides-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
   RidesRoutingModule
  ],
  declarations: [RidesPage]
})
export class RidesPageModule {}
