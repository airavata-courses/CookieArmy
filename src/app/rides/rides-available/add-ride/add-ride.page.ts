import { Component, OnInit } from '@angular/core';
import { Ride } from '../../ride.model';
import { RidesService } from '../../rides.service';
import { AuthService } from 'src/app/auth/auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-ride',
  templateUrl: './add-ride.page.html',
  styleUrls: ['./add-ride.page.scss'],
})
export class AddRidePage implements OnInit {
  date:string
  ride:Ride={rideId:'',date:'',from:'',to:'',time:'',price:0,name:'',image:'',email:''}; 
  constructor(private ridesService:RidesService,private router:NavController,private authService:AuthService) { }
  ngOnInit() {
  }

 async newadd(){
   let name=this.authService.getName();
    this.ride.name=name
    let email=this.authService.getEmail();
    this.ride.email=email
    //console.log(this.date)
    //this.ride.date=this.date
    console.log(this.ride);
    console.log('fuck')
    let done=this.ridesService.addRide(this.ride);
        this.router.pop();
      }
}