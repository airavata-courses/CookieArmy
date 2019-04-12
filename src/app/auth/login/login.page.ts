import { Component, OnInit } from '@angular/core';
import {  NgForm, Validators, FormArray } from '@angular/forms';
import { NavController, LoadingController } from '@ionic/angular';
import { Route, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email:string='';
  password:string='';
  wrongPassword:boolean=false;

  constructor(private authService:AuthService,
              private router:Router,
              private loadingController:LoadingController) {}
  userForm:NgForm;
  isLoading:boolean
  ngOnInit() {
  }

  async login(){
    this.isLoading=true;
    console.log(this.email);
    const resp= await this.authService.login(this.email,this.password);
    console.log(resp)
    this.loadingController.create({
      message:'Siginig u up... '
    }).then(
      (load)=>{
        load.present();
        setTimeout(()=>{
          this.isLoading=false;
          load.dismiss();
          this.router.navigateByUrl('/rides/tabs/rides-available')
        },1500)
      })
    
  }
  signup(){
    console.log(this.password);
    //this.router.navigate(['signup']);
    
  }

}