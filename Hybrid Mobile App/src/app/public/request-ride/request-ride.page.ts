import { Component, OnInit } from '@angular/core';
import { Ride } from 'src/app/models/ride';

@Component({
  selector: 'app-request-ride',
  templateUrl: './request-ride.page.html',
  styleUrls: ['./request-ride.page.scss'],
})
export class RequestRidePage implements OnInit {
  date:string='';
  ride:Ride={rideid:'',date:'', source:'',destination:'',time:'',amount:0,name:''}; 
  constructor() { }

  ngOnInit() {
  }

  request(){
    console.log(this.ride);
  }
}
