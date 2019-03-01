import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email:string='';
  password:string='';
  wrongPassword:boolean=false;
  constructor(private authService:AuthenticationService,private formBuilder: FormBuilder,private auth:AuthenticationService,
              private router:Router) {}
  userForm:NgForm;
  ngOnInit() {
  }

  login(){
    console.log(this.email);
    this.auth.loggedin(this.email,this.password);
  }
  signup(){
    console.log(this.password);
    this.router.navigate(['signup']);
    
  }

}
