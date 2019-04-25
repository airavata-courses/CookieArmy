import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './auth/auth.service';
import { RidesService } from './rides/rides.service';

import * as firebase from 'firebase/app';
import { userInfo } from 'os';

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
      var config = {
        apiKey: "AIzaSyDg269XE3BRoMDSuvVJj6xlRJCLFqbLJVo",
        authDomain: "auth-770bb.firebaseapp.com",
        databaseURL: "https://auth-770bb.firebaseio.com",
        projectId: "auth-770bb",
        storageBucket: "auth-770bb.appspot.com",
        messagingSenderId: "988215790476"
      };
      firebase.initializeApp(config);
      firebase.auth().onAuthStateChanged(user=>{
        if(user){
          
          //this.authService.already();
          this.authService.userloggedin(user.displayName,user.email,user.refreshToken);
          console.log(user);
        }
      })
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
    this.authService.firebaseLogout();
  }
}
