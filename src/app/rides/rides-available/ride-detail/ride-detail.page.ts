import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, AlertController, LoadingController } from '@ionic/angular';
import { Ride } from '../../ride.model';
import { RidesService } from '../../rides.service';

@Component({
  selector: 'app-ride-detail',
  templateUrl: './ride-detail.page.html',
  styleUrls: ['./ride-detail.page.scss'],
})
export class RideDetailPage implements OnInit {
  ride:Ride
  isLoading:boolean
  constructor(private router:Router,private navCtrl:NavController,private activatedRoute:ActivatedRoute,
    private alertController:AlertController,private rideService:RidesService,private loadingController:LoadingController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('rideId')){

      }
      let rideId=paramMap.get('rideId');
      console.log(paramMap)
      this.ride=this.rideService.getRide(rideId)
      console.log(this.ride)
    })
  }

 async  bookRide(){
    //this.router.navigateByUrl('/rides/tabs/rides-available');
   // this.navCtrl.navigateBack('/rides/tabs/rides-available');
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Book Ride!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('done')
            this.isLoading=true;
            this.loadingController.create({
              message:'Confirming Ride '
            }).then(
              (load)=>{
                load.present();
                 this.rideService.sendMail();
                setTimeout(()=>{
                  this.isLoading=false;
                  load.dismiss();
                  this.navCtrl.navigateBack('/rides/tabs/rides-available');
                },900)
              })
           
          }
        }
      ]
    });

    await alert.present();
  }
}
