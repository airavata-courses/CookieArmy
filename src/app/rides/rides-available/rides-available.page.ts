import { Component, OnInit } from '@angular/core';
import { RidesService } from '../rides.service';
import { Ride } from '../ride.model';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from 'src/app/auth/auth.service';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-rides-available',
  templateUrl: './rides-available.page.html',
  styleUrls: ['./rides-available.page.scss'],
})
export class RidesAvailablePage implements OnInit {

  rides:Ride[]

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

  ngOnInit() {
    this.rides=this.rideService.getRides();
  }


}
