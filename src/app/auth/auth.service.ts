import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Platform } from '@ionic/angular';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

import httpClient from './../infra/http-client';
import  * as firebase from 'firebase/app'
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
export class AuthService {

  private ip:string='149.165.171.121:5000';
  authenticationState = new BehaviorSubject(false);

 private email:string;
 private name:string;
 private isauth:boolean=false;
 private token:string;
  constructor(private plt:Platform, private http:HttpClient) { 
    this.plt.ready().then(()=>{
      //this.checkToken();
    });
  }

  isAuthenticated(){
    return this.isauth;
  }

  getEmail(){
    return this.email;
  }
  getName(){
    return this.name;
  }
  already(){
    this.authenticationState.next(true);
  }
  userloggedin(email:string,name:string,token:string){
    this.token=token
    this.email=email;
    this.name=name;
    this.authenticationState.next(true);
  }
  firebaseNew(email:string,password:string){
    return firebase.auth().createUserWithEmailAndPassword(email,password);
  }

  firebaseLogin(email:string,password:string){
      return firebase.auth().signInWithEmailAndPassword(email,password);
  }

  firebaseLogout(){
    this.authenticationState.next(false);
      firebase.auth().signOut();
  }

  async login(email:string,password:string){
    console.log('tried')
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
     
     httpClient.post("http://"+this.ip+"/auth/login",{email:email,password:password}).then(
        resp=>{
          console.log(resp.status)
          const data =  resp.data;
          if(resp.status!=200){
            this.isauth=false;
          }
          else{
            console.log('logged in')
            this.isauth=true;
            this.email=data.email;
            this.token=data.access_token;
            this.name=data.name;
            this.authenticationState.next(true);
          }
        }
      ).catch(
      (resp)=>{
        console.log(resp)
        this.isauth=false;
      }
        )
      return this.isauth
  }
  
  async newuser(email:string,password:string,name:string){
    console.log('tried')
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
     
     httpClient.post("http://"+this.ip+"/auth/new-user",{email:email,password:password,name:name}).then(
        resp=>{
          console.log(resp.data)
          console.log(resp.data.access_token)
          const data = resp.data;
          console.log(resp)
          console.log(data)
          if(resp.status!=200){
            this.isauth=false;
          }
          else{
            this.isauth=true;
            this.email=email;
            this.token=data.access_token;
            this.name=name;
            this.authenticationState.next(true);
            console.log(this.email)
            console.log('came')
            return this.isauth;
          }
        }
      ).catch(
      (resp)=>{
        console.log(resp)
        this.isauth=false;
        return false;
      }
        )    
  }

  login1(email:string,password:string){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
 
   return  this.http.post<myData>(this.ip+"/login",{email:email,password:password},httpOptions)
          .subscribe(data => {
              if(data.access_token=''){
                return false;
              }
              else{
                this.isauth=true;
                this.email=data.email;
                this.token=data.access_token;
                this.name=data.name;
                return true;
              }
            });
};

  logout(){
        this.isauth=false;
        this.email='';
        this.name='';
        this.token='';
        this.authenticationState.next(false);
      };
 
  user:{email:string,name:string,password:string,username:string}={email:'',name:'',password:'',username:''}

  signup(email:string,name:string,password:string){
    console.log('here')
    this.user.email=email
    this.user.name=name
    this.user.password=password

    const headers=new HttpHeaders()
                      .set('content-type','application/json');
  return this.http.post<sign>(this.ip+"/newuser",JSON.stringify(this.user),{headers:headers})
  }

}
