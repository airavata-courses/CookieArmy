import { Component, OnInit } from '@angular/core';
import { AddRide } from 'src/app/models/addride';
import {Ride} from 'src/app/models/ride';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  ridesAvialable:Observable<any>
  test:Observable<any>
  isAuthenticated:boolean=false
  constructor(private auth:AuthenticationService,private router:Router,private navController:NavController) { }

  ngOnInit() {
    
    
    //this.auth.getTest();
    //console.log(this.ridesAvialable)
  }
  confirm:Observable<any>
  bookRide(ride:Ride){
    //console.log('here')
      //console.log(ride);
      if(this.auth.isauth){
      
        this.auth.bookRide(ride).subscribe(
        hero=>{
          this.auth.sendemail().subscribe(
            h=>{
          // add navigate to booked history
          //    console.log("done")
          })
        }
      );
      console.log(this.confirm)  
      // send data to db and update in requirement
      }
      else{
        this.router.navigate(['login']);
      }
  }

  createRide(){
   // this.navController.navigateForward('request-ride');
    this.router.navigate(['create-ride'])
  }

  home(){
    this.router.navigate(['home'])
    console.log("home")
  }
  requestedrides(){
    this.router.navigate(['requested-rides']);
    console.log('reguested');
  }

  ionViewDidEnter(){
    this.ridesAvialable=this.auth.getrides();
    this.auth.authenticationState.subscribe(state=>{
      console.log('change '+state);
        if(state){
          this.isAuthenticated=this.auth.isAuthenticated();
        }
        else{
          this.isAuthenticated=false;
        }
    })
  }
  ionViewDidLeave(){
    this.auth.authenticationState.subscribe(state=>{
      console.log('change '+state);
        if(state){
          this.isAuthenticated=this.auth.isAuthenticated();
        }
        else{
          this.isAuthenticated=false;
        }
    })
  }
}
