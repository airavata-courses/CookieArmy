import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './auth/auth.service';
import { RidesService } from './rides/rides.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService:AuthService,
    private rideService:RidesService
  ) {
    this.initializeApp();
  }
  isAuthenticated:boolean=false;
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.rideService.getavailableRides();
      this.rideService.getrequestedRides();       
      this.authService.authenticationState.subscribe(state=>{
        console.log('change '+state);
          if(state){
            this.isAuthenticated=true;
          }
          else{
            this.isAuthenticated=false;
          }
      })
    });
  }
  loginpage(){
    console.log('login');
  }
  logout(){
    console.log('done')
    this.authService.logout();
  }
}
