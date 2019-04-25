import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'rides', pathMatch: 'full' },
  { path: 'rides', loadChildren: './rides/rides.module#RidesPageModule' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' },
  { path: 'login', loadChildren: './auth/login/login.module#LoginPageModule' },
  { path: 'new-user', loadChildren: './auth/new-user/new-user.module#NewUserPageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },  { path: 'green', loadChildren: './green/green.module#GreenPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
