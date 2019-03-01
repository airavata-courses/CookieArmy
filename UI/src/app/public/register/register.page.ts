import { Component, OnInit } from '@angular/core';
import { Ride } from 'src/app/models/ride';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  date:string='';
  ride:Ride={date:'',source:'',destination:'',time:'',amount:0,name:'',rideid:'',}; 
  constructor() { }

  ngOnInit() {
  }

  register(){
    console.log(this.ride);
  }
}
