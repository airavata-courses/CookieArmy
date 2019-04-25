import { Component, OnInit } from '@angular/core';
import { Ride } from '../../ride.model';
import { RidesService } from '../../rides.service';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-request-ride',
  templateUrl: './request-ride.page.html',
  styleUrls: ['./request-ride.page.scss'],
})
export class RequestRidePage implements OnInit {

  date:string='';
  ride:Ride={rideId:'',date:'',from:'',to:'',time:'',price:0,name:'',image:'',email:''}; 
  constructor(private ridesService:RidesService,private router:NavController,private authService:AuthService) { }
  ngOnInit() {
  }

 async newrequest(){
    this.ride.name=this.authService.getName();
    this.ride.email=this.authService.getEmail();
    console.log(this.ride);
    console.log('fuck')
    let done=this.ridesService.addRequest(this.ride);
        this.router.pop();
      }
}
