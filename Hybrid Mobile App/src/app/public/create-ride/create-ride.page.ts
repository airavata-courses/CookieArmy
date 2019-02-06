import { Component, OnInit } from '@angular/core';
import { Ride } from 'src/app/models/ride';
import { AddRide } from 'src/app/models/addride';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-create-ride',
  templateUrl: './create-ride.page.html',
  styleUrls: ['./create-ride.page.scss'],
})
export class CreateRidePage implements OnInit {
  date:string='';
  ride:AddRide={rideid:'',date:'', source:'',destination:'',time:'',amount:0,name:'',contact_details:'',}; 
  constructor(private authService:AuthenticationService) { }
  ngOnInit() {
  }

  newadd(){
    this.ride.name=this.authService.getName();
    this.ride.contact_details=this.authService.getEmail();
    console.log(this.ride);
    console.log('fuck')
    this.authService.addride(this.ride).subscribe(
      (asd)=>{
        console.log(asd);
      }
    )
  }
}
