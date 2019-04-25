import { Component, OnInit } from '@angular/core';
import {  NgForm, Validators, FormArray } from '@angular/forms';
import { NavController, LoadingController, Platform, AlertController } from '@ionic/angular';
import { Route, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {AngularFireAuth} from 'angularfire2/auth';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { resolve } from 'q';
//import { platform } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 
  user:Observable<firebase.User>;
  email:string='';
  password:string='';
  wrongPassword:boolean=false;

  constructor(private authService:AuthService,
              private router:Router,
              private loadingController:LoadingController,
               private afAuth:AngularFireAuth, private platform:Platform,
               private gplus: GooglePlus,private alrtctrl:AlertController) {
                this.user=this.afAuth.authState;
              }
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
    this.router.navigate(['new-user']);
    //this.router.navigate(auth/signup');
  }

  
  googleLogin() {
    if (this.platform.is('cordova')) {
      console.log('cordova');
      this.nativeGoogleLogin();
    } else {
      console.log('web')
      this.webGoogleLogin();
    }
  }
  
  signOut() {
    this.afAuth.auth.signOut();
  }

  async nativeGoogleLogin(): Promise<void> {
    try {
      const gplusUser = await this.gplus.login({
        'webClientId': '988215790476-ud36ro4mpi2kt9njir5rtl2trk8s1898.apps.googleusercontent.com',
        'offline': true,
        'scopes': 'profile email'
      })
      const googleCredential = firebase.auth.GoogleAuthProvider
                  .credential(gplusUser.idToken);

              firebase.auth().signInWithCredential(googleCredential)
            .then( response => {
                console.log("Firebase success: " + JSON.stringify(response));
                this.router.navigateByUrl('/rides/tabs/rides-available');
                resolve(response)
            });
  
      return await firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken)).then((v)=>{
        console.log(v);
      }).catch(e=>{
        console.log(e);
      });
  
    } catch(err) {
      console.log(err)
    }
  }
  async webGoogleLogin(): Promise<void> {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      console.log(provider)
      const credential = await this.afAuth.auth.signInWithPopup(provider);
      const email=credential.additionalUserInfo.profile.email;
      const name=credential.additionalUserInfo.profile.name;
      const token=credential.credential.idToken;
      this.authService.userloggedin(email,name,token);
      console.log(credential)
      this.router.navigateByUrl('/rides/tabs/rides-available');
    } catch(err) {
      console.log(err)
    }
  
  }

  async  onLogin(){
    const error = await this.alrtctrl.create({
      header: 'Log in',
      //subHeader: 'Subtitle',
      message: 'Invalid Credential',
      buttons: ['OK']
    });
    this.authService.firebaseLogin(this.email,this.password)
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
  signup1(){
    this.router.navigateByUrl('/rides/tabs/rides-available');
  }

}