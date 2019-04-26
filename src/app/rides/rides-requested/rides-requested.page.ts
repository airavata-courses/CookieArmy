import { Component, OnInit } from '@angular/core';
import { Ride } from '../ride.model';
import { RidesService } from '../rides.service';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-rides-requested',
  templateUrl: './rides-requested.page.html',
  styleUrls: ['./rides-requested.page.scss'],
})
export class RidesRequestedPage implements OnInit {

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
  ridesRequested:Ride[];
  ngOnInit() {
    this.ridesRequested=this.rideService.getreqRides();
  }

   ionViewWillEnter(){
    console.log('ion updated');
    this.ridesRequested=this.rideService.getreqRides();
  }

}
