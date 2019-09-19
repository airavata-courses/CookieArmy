import { Injectable } from '@angular/core';
import { Ride } from './ride.model';

import httpClient from './../infra/http-client';
import { Platform, AlertController } from '@ionic/angular';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { AlertButton } from '@ionic/core';

@Injectable({
  providedIn: 'root'
})
export class RidesService {

  private _rides:Ride[] = [{
    rideId:'1',from:'Bangalor',to:'Chennai',date:'Jan 1',image:'https://si.wsj.net/public/resources/images/BN-BY925_mag041_OZ_20140318165119.jpg',
    price:10,time:'10.10',name:'Scarlett',email:'a@g.com'
  },{
    rideId:'2',from:'Bangalore',to:'Goa',date:'Jan 2',image:'https://www.telegraph.co.uk/content/dam/news/2016/05/16/98107752_Salma-Hayek-NEWS_1_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg?imwidth=1400',
    price:5,time:'07.10',name:'Salma',email:'d@h.com'
  },
  new Ride('3','Aaron','Bangalore','X','05.10','Dec 31','https://upload.wikimedia.org/wikipedia/commons/2/26/Aaron_Swartz_2_at_Boston_Wikipedia_Meetup%2C_2009-08-18.jpg',
    10,'a@b.com')
];

private requested_rides:Ride[] = [{
  rideId:'1',from:'Bangalor',to:'Chennai',date:'Jan 1',image:'https://si.wsj.net/public/resources/images/BN-BY925_mag041_OZ_20140318165119.jpg',
  price:10,time:'10.10',name:'Johansson',email:'a@y.com'
},{
  rideId:'2',from:'Bangalore',to:'Goa',date:'Jan 2',image:'https://www.telegraph.co.uk/content/dam/news/2016/05/16/98107752_Salma-Hayek-NEWS_1_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg?imwidth=1400',
  price:5,time:'07.10',name:'Hayek',email:'a@t.com'
},
new Ride('3','Swartz','Bangalore','X','05.10','Dec 31','https://upload.wikimedia.org/wikipedia/commons/2/26/Aaron_Swartz_2_at_Boston_Wikipedia_Meetup%2C_2009-08-18.jpg',
  10,'a@x.com')
];

private ip:string='149.165.171.121:5000';
  constructor(private authService:AuthService,private alertController:AlertController) { }

  getRides(){
    return [...this._rides];
  }
  getreqRides(){
    return [...this.requested_rides];
  }
  getRide(rideId:string){
    console.log(rideId)
    return {
      ...this._rides.find(ride=>{
      return ride.rideId===rideId;
    })
  };
  }
 async addRide(ride:Ride){
  const salert = await this.alertController.create({
    header: 'New ride',
    //subHeader: 'Subtitle',
    message: 'Added Successfully.',
    buttons: ['OK']
  });
  const ualert = await this.alertController.create({
    header: 'New Ride',
    //subHeader: 'Subtitle',
    message: 'Couldnt add.',
    buttons: ['OK']
  });
   console.log(ride)
   let email=this.authService.getEmail();
   let name=this.authService.getName();
   console.log(ride)
      console.log('tried')
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
      let done:boolean=false;
       httpClient.post("http://"+this.ip+"/updateride/add", {source:ride.from,destination:ride.to,date:ride.date,
       time:ride.time,amount:ride.price,contact_details:email,name:name}).then(
          resp=>{
            if(resp.status==200){
            console.log(resp)
            const data =  resp.data;
            this._rides.concat(ride);
             salert.present();
            return true;
            }
            else{
              ualert.present();
            }
          }
        ).catch(
        (resp)=>{
          ualert.present();
          console.log(resp)
          return false;
        }
          )
        return done;
  }
  async addRequest(ride:Ride){
    const salert = await this.alertController.create({
      header: 'New request',
      //subHeader: 'Subtitle',
      message: 'Added Successfully.',
      buttons: ['OK']
    });
    const ualert = await this.alertController.create({
      header: 'New request',
      //subHeader: 'Subtitle',
      message: 'Couldnt add.',
      buttons: ['OK']
    });
     console.log(ride)
     let email=this.authService.getEmail();
     let name=this.authService.getName();
     console.log(ride)
        console.log('tried')
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json'
          })
        };
        let done:boolean=false;
         httpClient.post("http://"+this.ip+"/updaterequest/add", {source:ride.from,destination:ride.to,date:ride.date,
         time:ride.time,amount:ride.price,contact_details:email,name:name}).then(
            resp=>{
              if(resp.status==200){
              console.log(resp)
              const data =  resp.data;
              this._rides.concat(ride);
               salert.present();
              return true;
              }
              else{
                ualert.present();
              }
            }
          ).catch(
          (resp)=>{
            ualert.present();
            console.log(resp)
            return false;
          }
            )
     
      return done;
}
  async getavailableRides(){
    httpClient.get("http://"+this.ip+"/getride/availablerides").then(
      resp=>{
        console.log(resp)
        const data =  resp.data;
        this._rides=resp.data;
      }
    ).catch(
    (resp)=>{
      console.log(resp)
    }
      )
  }
   async getrequestedRides(){
    httpClient.get("http://"+this.ip+"/getrequest/getrequests").then(
      resp=>{
        console.log(resp)
        const data =  resp.data;
        this.requested_rides=resp.data;
      }
    ).catch(
    (resp)=>{
      console.log(resp)
    }
      )
  }
  async sendMail(){
    console.log('tried')
    let name=this.authService.getName();
    let email=this.authService.getEmail();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    let done:boolean=false;
     httpClient.post("http://"+this.ip+"/email/sendmail",{name:name,email:email,message:"Booking Confirmed"}).then(
        resp=>{
          console.log(resp)
          const data =  resp.data;
          done=true;
        }
      ).catch(
      (resp)=>{
        console.log(resp)
      }
        )
}
}
