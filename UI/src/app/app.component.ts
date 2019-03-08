import { Component } from '@angular/core';

import { Platform, MenuController, LoadingController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';
import { LoadedRouterConfig } from '@angular/router/src/config';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService:AuthenticationService,
    private router:Router,
    private menu: MenuController,
    private lcntroller:LoadingController
  ) {
    this.initializeApp();
  }

  isAuthenticated:boolean=false;
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.authService.authenticationState.subscribe(state=>{
        console.log('change '+state);
          if(state){
            this.isAuthenticated=true;
            const loading=this.lcntroller.create({
              //keyboardClose:true,
              message:'Loggin u in.. '
            }).then(
              load=>{
                load.present();
              setTimeout(() => {
                load.dismiss();
                this.router.navigate(['home']);
              }, 1500);  
              }
            ) 
             
          }
          else{
            this.isAuthenticated=false;
              this.router.navigate(['home']);
          }
      })
    });
  }

  userData(){
    this.router.navigate(['details']);
  }

  onLogout(){
    this.authService.logout(); 
  }

  fakeSignIn(){
    this.authService.login();
  }

  registerride(){
    this.router.navigate(['register-ride']);
  }

  bookedrides(){
    this.router.navigate(['booked-rides']);
  }

  ridesposted(){
    this.router.navigate(['rides-posted']);
  }

  signin(){
    this.router.navigate(['login']);
  }
  signup(){
    this.router.navigate(['signup']);
  }
  about(){
    this.router.navigate(['about']);
  }
}
