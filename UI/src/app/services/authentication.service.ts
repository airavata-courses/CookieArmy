import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Platform } from '@ionic/angular';

import {Storage} from '@ionic/storage';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Ride } from '../models/ride';
import { AddRide } from '../models/addride';

interface myData{
  access_token:string,
  email:string,
  id:number,
  message:string,
  name:string
}

interface sign{
  access_token:string,
  message:string
}
const TOKEN_KEY = 'auth-token';
const EMAIL = 'auth-email';
const NAME = 'auth-name';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticationState = new BehaviorSubject(false);

  email:string
  emailDone:boolean=false
  name:string="gattu"
  nameDone:boolean=false
  isauth:boolean=false;
  constructor(private storage:Storage,private plt:Platform, private http:HttpClient) { 
    this.plt.ready().then(()=>{
      this.checkToken();
    });
  }

  login(){
      this.storage.set(EMAIL,'a@y.com').then(
        res=>{
          this.email='a@y.com';
          this.emailDone=true;
        });

        this.storage.set(NAME,'gattu').then(
          res=>{
            this.name="gattu"
            this.nameDone=true;
          });
    return this.storage.set(TOKEN_KEY, 'Bearer 12345').then(
        res=>{
          if(this.emailDone && this.nameDone){
          this.isauth=true;
          this.authenticationState.next(true);
          }
        });
  }
  loggedin(email:string,password:string){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
     this.http.post<myData>("http://149.165.168.54:7998/login",{email:email,password:password},httpOptions)
          .subscribe(data => {

            this.storage.set(EMAIL,data.email).then(
              res=>{
                this.email=data.email;
                this.emailDone=true;
              });
      
              this.storage.set(NAME,data.name).then(
                res=>{
                  this.name=data.name
                  this.nameDone=true;
                });
          return this.storage.set(TOKEN_KEY,data.access_token).then(
              res=>{
                if(data.access_token && this.emailDone && this.nameDone){
                this.isauth=true;
                this.authenticationState.next(true);
                }
              });
   });
};

  logout(){
    this.storage.remove(NAME).then(
      res=>{
        this.nameDone=false;
      });
      this.storage.remove(EMAIL).then(
        res=>{
          this.emailDone=false;
          this.authenticationState.next(false);
        });

    return this.storage.remove(TOKEN_KEY).then(
      res=>{
        this.isauth=false;
        this.authenticationState.next(false);
      });
 }
  isAuthenticated(){
    return this.authenticationState.value;
  }

  getEmail(){
    return this.email;
  }
  getName(){
    return this.name;
  }
  checkToken(){

    this.storage.get(EMAIL).then(
      res=>{
        if(res){
          this.email=res
          this.emailDone=true;
              }
        });
     
    this.storage.get(NAME).then(
      res=>{
        if(res){
          this.name=res
          this.nameDone=true;
              }
        });   
    return this.storage.get(TOKEN_KEY).then(
      res=>{
        if(res && this.nameDone && this.emailDone){
          this.isauth=true;
          this.authenticationState.next(true);
        }
        });
  }
  user:{email:string,name:string,password:string,username:string}={email:'',name:'',password:'',username:''}

  signup(email:string,name:string,password:string){
    console.log('here')
    this.user.email=email
    this.user.name=name
    this.user.password=password

    const headers=new HttpHeaders()
                      .set('content-type','application/json');
  return this.http.post<sign>("http://149.165.168.54:7998/registration",JSON.stringify(this.user),{headers:headers})
                        
  }

  getrides():Observable<any>{
    console.log('before')
   return this.http.get("http://149.165.157.87:8080/offering")
                .pipe(
                  map(results=>{
                    return results;
                  })
                );
    
  }

  getTest(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    console.log('test');
   this.http.post("http://149.165.168.54:7998/login",{email:'test32',password:'test32'},httpOptions).pipe(
     map(result=>{
       return result;
     })
   ).subscribe(
     (data)=>{
       console.log(data)
     }
   )

  }

  bookRide(ride:Ride):Observable<any>{
    console.log(ride.rideid)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post("http://149.165.157.87:8080/confirm",{rideid:ride.rideid,passenger1:this.name,passenger3:this.name,
          passenger2:this.name},httpOptions)
            .pipe(
                map(result=>{
                  console.log('in                  in')
                  console.log(result);
                  return result;
                  })
            );
          }

  addride(ride:AddRide){

    console.log(ride.rideid)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post("http://149.165.157.87:8080/offering",
    {name:ride.name,contact_details:ride.contact_details,source:ride.source,destination:ride.destination,date:ride.date,
      time:ride.time,amount:ride.amount},httpOptions)
            .pipe(
                map(result=>{
                  console.log('in                  in')
                  console.log(result);
                  return result;
                  })
            );
    
    }
    
    sendemail(){
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
      return this.http.post("http://149.165.168.207:3000/send",
      {name:this.name,email:this.email,message:"Booking Confirmed"},httpOptions)
              .pipe(
                  map(result=>{
                    console.log('in                  in')
                    console.log(result);
                    return result;
                    })
              );
    }
    
        }
