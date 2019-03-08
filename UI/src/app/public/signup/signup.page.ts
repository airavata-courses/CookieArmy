import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  email:string='';
  password:string='';
  name:string='';
  wrongPassword:boolean=false;

  failed:boolean=false
  constructor(private router:Router,private authService:AuthenticationService,private lcntroller:LoadingController) {}

  ngOnInit() {
  }

  signup(){
   //createRide
    
    this.authService.signup(this.email,this.name,this.password).subscribe(
      (data)=>{
        console.log(data)
        if(data.access_token){
          const loading=this.lcntroller.create({
            //keyboardClose:true,
            message:'Setting u up...'
          }).then(
            load=>{
              load.present();
            setTimeout(() => {
              load.dismiss();
              this.router.navigate(['home']);
            }, 1500);  
            }
          )
          
        }
      }
  );
   console.log(this.email);
  
  }

}
