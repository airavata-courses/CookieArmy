import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, 
  { path: 'home', loadChildren: './public/home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './public/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './public/register/register.module#RegisterPageModule' },
  { path:'members',canActivate:[AuthGuardService],loadChildren:'./members/member-routing.module#MemberRoutingModule'},
  { path: 'signup', loadChildren: './public/signup/signup.module#SignupPageModule' },
  { path: 'create-ride', loadChildren: './public/create-ride/create-ride.module#CreateRidePageModule' },
  { path: 'request-ride', loadChildren: './public/request-ride/request-ride.module#RequestRidePageModule' },
  { path: 'tabs', loadChildren: './public/tabs/tabs.module#TabsPageModule' },
  { path: 'requested-rides', loadChildren: './public/requested-rides/requested-rides.module#RequestedRidesPageModule' },
  { path: 'booked-rides', loadChildren: './public/booked-rides/booked-rides.module#BookedRidesPageModule' },
  { path: 'rides-posted', loadChildren: './public/rides-posted/rides-posted.module#RidesPostedPageModule' },
  { path: 'post-ride', loadChildren: './public/post-ride/post-ride.module#PostRidePageModule' },
  { path: 'about', loadChildren: './public/about/about.module#AboutPageModule' },
  { path: 'details', loadChildren: './public/details/details.module#DetailsPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
