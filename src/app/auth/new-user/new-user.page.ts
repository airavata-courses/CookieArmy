import { Component, OnInit } from '@angular/core';
import {  NgForm, Validators, FormArray } from '@angular/forms';
import { NavController, LoadingController, AlertController } from '@ionic/angular';
import { Route, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.page.html',
  styleUrls: ['./new-user.page.scss'],
})
export class NewUserPage implements OnInit {
  email:string='';
  password:string='';
  name:string='';
  wrongPassword:boolean=false;

  constructor(private authService:AuthService,
              private router:Router,
              private loadingController:LoadingController,private alertController:AlertController) {}
  userForm:NgForm;
  isLoading:boolean
  ngOnInit() {
  }

  async newUser(){
    console.log(this.email);
    this.isLoading=true;
    let resp= await this.authService.newuser(this.email,this.password,this.name);
   
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
  
 async  onSignin(){
    const error = await this.alertController.create({
      header: 'Signup',
      //subHeader: 'Subtitle',
      message: 'password strength weak',
      buttons: ['OK']
    });
    this.authService.firebaseNew(this.email,this.password)
    .then(data=>{
      console.log(data);
      this.authService.userloggedin(this.email,this.password,'token');
      this.router.navigateByUrl('/rides/tabs/rides-available');
    })
    .catch(data=>{
      error.present();
      console.log(data);
    });
  
  }

}